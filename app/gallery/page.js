import Banner from '@/components/banner'
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
    </div>
  )
}

export default Gallery