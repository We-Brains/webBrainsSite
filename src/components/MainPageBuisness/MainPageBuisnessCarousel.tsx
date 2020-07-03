import React from 'react'
import Carousel from 'react-multi-carousel'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'
import MainPageBuisnessItem from './MainPageBuisnessItem'
import './MainPageBuisnessCarousel.scss'

const MainPageBuisnessCarousel = () => {
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    },
    tablet: {
      breakpoint: { max: Infinity, min: 768 },
      items: 4
    }
  }
  return (
    <Carousel containerClass="main-page-buissness-carousel" responsive={responsive} customButtonGroup={<CarouselButtonGroup />}>
      <MainPageBuisnessItem />
      <MainPageBuisnessItem />
      <MainPageBuisnessItem />
      <MainPageBuisnessItem />
    </Carousel>
  )
}

export default MainPageBuisnessCarousel
