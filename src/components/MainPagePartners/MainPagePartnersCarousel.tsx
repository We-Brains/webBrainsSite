import React from 'react'
import Carousel from 'react-multi-carousel'
import MainPagePartnerItem from './MainPagePartnerItem'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'
import './MainPagePartnersCarousel.scss'

const MainPagePartnersCarousel: React.FC = (): JSX.Element => {
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    },
    tablet: {
      breakpoint: { max: Infinity, min: 768 },
      items: 6
    }
  }
  return (
    <Carousel responsive={responsive} containerClass="partners-carousel" customButtonGroup={<CarouselButtonGroup />}>
      <MainPagePartnerItem />
      <MainPagePartnerItem />
      <MainPagePartnerItem />
      <MainPagePartnerItem />
      <MainPagePartnerItem />
      <MainPagePartnerItem />
    </Carousel>
  )
}

export default MainPagePartnersCarousel
