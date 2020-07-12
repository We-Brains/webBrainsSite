import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import MainPagePartnerItem from './MainPagePartnerItem'
import './MainPagePartnersCarousel.scss'
import { IMainPagePartnersCarousel } from './Types'
import Arrow from '../CarouselComponents/Arrow'

const MainPagePartnersCarousel: React.FC<IMainPagePartnersCarousel> = ({ partners }): JSX.Element => {
  const carousel = useRef()
  return (
    <div className="partners-carousel">
      <AliceCarousel
        buttonsDisabled
        dotsDisabled
        infinite={false}
        responsive={{
          767: { items: partners.length }
        }}
        ref={carousel}
      >
        {partners.map(({ id, image: { childImageSharp: { fluid: { src } } } }) => (
          <MainPagePartnerItem key={id} imageSrc={src} />
        ))}
      </AliceCarousel>
      <Arrow className="carousel-button-left" onClick={() => carousel.current.slidePrev()} />
      <Arrow className="carousel-button-right" onClick={() => carousel.current.slideNext()} />
    </div>
  )
}

export default MainPagePartnersCarousel
