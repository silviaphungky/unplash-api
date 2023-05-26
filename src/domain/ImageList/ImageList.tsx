import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Container,
  EmptyText,
  IconContainer,
  PaginationText,
} from './_ImageList'
import {
  ImageListPreview,
  ImageListCard,
  ImagesListSearchInput,
} from './components'
import InfiniteScroll from 'react-infinite-scroll-component'
import useDebounce from '@utils/useDebounce'
import { Shimmer } from '@components'
import { IconEmptyData } from '@components/icons'
import getConfig from 'next/config'

export interface ImageUrls {
  full: string
  raw: string
  regular: string
  small: string
  small_s3: string
  thumb: string
}

export interface ImagesResponse {
  id: string
  urls: ImageUrls
  alt_description: string
  user: {
    name: string
  }
  links: {
    download: string
    download_location: string
    html: string
    self: string
  }
}

const { publicRuntimeConfig } = getConfig()

const ImageList = () => {
  const [keyword, setKeyword] = useState('')
  const [isShow, setIsShow] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalImages, setTotalImages] = useState(0)
  const [previewImg, setPreviewImg] = useState(
    {} as {
      urls: ImageUrls
    }
  )
  const [images, setImages] = useState<Array<ImagesResponse>>([])
  const [isLoading, setIsLoading] = useState(true)

  const debouncedKeyword = useDebounce(keyword, 500)

  const fetchImages = async (currentPage: number) => {
    setIsLoading(true)
    await axios
      .get(`${publicRuntimeConfig['base-url']}/search/photos`, {
        params: {
          client_id: publicRuntimeConfig['client-id'],
          query: debouncedKeyword,
          page: currentPage,
          per_page: 10,
        },
      })
      .then((response) => {
        const data = response.data
        const pageLimit = data.total_pages
        const imagesLimit = data.total

        setTotalPages(pageLimit)
        setPage(currentPage + 1)
        setTotalImages(imagesLimit)

        if (data.results.length) {
          const updatedImages =
            currentPage === 1 ? data.results : [...images, ...data.results]
          setImages(updatedImages)
        } else setImages([])
      })
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (debouncedKeyword) {
      fetchImages(1)
    } else {
      setImages([])
      setPage(1)
      setTotalPages(1)
    }
  }, [debouncedKeyword])

  useEffect(() => {
    if (!isShow) {
      setPreviewImg({} as { urls: ImageUrls })
    }
  }, [isShow])

  const handlePreviewImg = (image: { urls: ImageUrls }) => {
    setPreviewImg(image)
    setIsShow(true)
  }

  const handleNext = () => {
    fetchImages(page)
  }

  const isImageNotFound = !isLoading && debouncedKeyword && !images.length
  const isSearching = isLoading && keyword && page === 1
  const isFirstLoad = !keyword

  return (
    <div style={{ padding: '0 1rem' }}>
      <ImagesListSearchInput keyword={keyword} setKeyword={setKeyword} />

      {isSearching && (
        <>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </>
      )}

      {(isImageNotFound || isFirstLoad) && (
        <IconContainer>
          <IconEmptyData />
          <EmptyText>
            {isFirstLoad
              ? `What photo are you looking for?`
              : 'Try to find another keywords...'}
          </EmptyText>
        </IconContainer>
      )}

      {images.length > 0 && (
        <PaginationText>
          {`Showing ${page * 10} photos from ${totalImages}`}
        </PaginationText>
      )}

      <InfiniteScroll
        dataLength={images.length}
        next={handleNext}
        hasMore={page < totalPages}
        loader={<h4>Loading...</h4>}
      >
        <Container>
          {images.map((item, i) => {
            return (
              <ImageListCard
                key={`image-${i}`}
                item={item}
                handlePreviewImg={handlePreviewImg}
              />
            )
          })}
        </Container>
      </InfiniteScroll>

      <ImageListPreview
        previewImg={previewImg}
        isShow={isShow}
        setIsShow={setIsShow}
      />
    </div>
  )
}

export default ImageList
