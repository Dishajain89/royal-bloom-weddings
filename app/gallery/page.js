import Banner from '@/components/banner'
import GallerySection from '@/components/home/gallerySection'
import PictureGallery from '@/components/pictureGallery'
import React from 'react'

function Gallery() {
  return (
    <div>
      <Banner 
      title="Gallery"
      description="Capturing emotions, preserving memories"
      backgroundImage="/images/banner1.jpg"
       />
       <PictureGallery />
       <GallerySection/>
    </div>
  )
}

export default Gallery