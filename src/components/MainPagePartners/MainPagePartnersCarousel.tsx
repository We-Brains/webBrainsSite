import React from 'react'
import Carousel from 'react-multi-carousel'
import MainPagePartnerItem from './MainPagePartnerItem'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'
import './MainPagePartnersCarousel.scss'
import { IMainPagePartnersCarousel } from './Types'

const MainPagePartnersCarousel: React.FC<IMainPagePartnersCarousel> = ({ partners }): JSX.Element => {
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
      {partners.map(({ id, image: { childImageSharp: { fluid: { src } } } }) => (
        <MainPagePartnerItem key={id} imageSrc={src} />
      ))}
    </Carousel>
  )
}

export default MainPagePartnersCarousel
