import Image from 'next/image'
import { Dispatch } from 'react'
import { ImageContainer } from './_ImageListPreview'
import { ImageUrls } from '../../ImageList'
import { Modal } from '@components'

interface Props {
  previewImg: {
    urls: ImageUrls
  }
  isShow: boolean
  setIsShow: Dispatch<boolean>
}

const ImageListPreview = ({ previewImg, isShow, setIsShow }: Props) => {
  const urls = previewImg.urls || {}
  const regularImg = urls.regular || ''

  return (
    <Modal isShow={isShow} setIsShow={setIsShow}>
      <ImageContainer>
        {regularImg && <Image src={regularImg} alt={'preview'} fill />}
      </ImageContainer>
    </Modal>
  )
}

export default ImageListPreview
