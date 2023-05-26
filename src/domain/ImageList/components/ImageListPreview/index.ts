import dynamic from 'next/dynamic'

const ImageListPreview = dynamic(() => import('./ImageListPreview'))

export default ImageListPreview
