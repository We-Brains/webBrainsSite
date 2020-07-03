import React from 'react'
import Carousel from 'react-multi-carousel'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'

const BuisnessCarousel = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1
    }
  }
  return (
    <Carousel responsive={responsive}>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
    </Carousel>
  )
}

export default BuisnessCarousel
