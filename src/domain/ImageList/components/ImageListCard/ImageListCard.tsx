import { IconDownload } from '@components/icons'
import {
  Author,
  Card,
  DownloadBtn,
  ImageContainer,
  Title,
} from './_ImageListCard'
import Image from 'next/image'
import { ImagesResponse } from '../../ImageList'

interface Props {
  item: ImagesResponse
  handlePreviewImg: (item: ImagesResponse) => void
}

const ImageListCard = ({ item, handlePreviewImg }: Props) => {
  return (
    <Card>
      <Author>© {item.user.name}</Author>
      <a
        rel="nofollow"
        download=""
        target="_blank"
        title="Download photo"
        href={`${item.links.download}&amp;force=true`}
      >
        <DownloadBtn>
          <IconDownload size={16} color="white" />
        </DownloadBtn>
      </a>
      <ImageContainer onClick={() => handlePreviewImg(item)}>
        <Image
          src={item.urls.thumb}
          alt={item.alt_description}
          fill
          style={{ cursor: 'pointer' }}
        />
      </ImageContainer>

      <Title>{item.alt_description}</Title>
    </Card>
  )
}

export default ImageListCard
