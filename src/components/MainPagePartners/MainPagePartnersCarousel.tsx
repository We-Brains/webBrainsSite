import React from 'react'
import MainPagePartnerItem from './MainPagePartnerItem'
import './MainPagePartnersCarousel.scss'
import { IMainPagePartnersCarousel } from './Types'
import Arrow from '../CarouselComponents/Arrow'
import Carousel from '../Carousel/Carousel'

const MainPagePartnersCarousel: React.FC<IMainPagePartnersCarousel> = ({ partners }): JSX.Element => {
  return (
    <div className="partners-carousel">
      <Carousel
        infinity={false}
        buttonPrev={<Arrow className="carousel-button-left" />}
        buttonNext={<Arrow className="carousel-button-right" />}
      >
        {partners.map(({ id, image: { childImageSharp: { fluid: { srcSet, srcSetWebp } } } }) => (
          <MainPagePartnerItem key={id} srcSet={srcSet} srcSetWebp={srcSetWebp} />
        ))}
      </Carousel>
    </div>
  )
}

export default MainPagePartnersCarousel
