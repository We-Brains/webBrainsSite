import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'
import MainPageBuisnessItem from './MainPageBuisnessItem'
import './MainPageBuisnessCarousel.scss'
import { IMainPageBuisnessCarousel } from './Types'
import Arrow from '../CarouselComponents/Arrow'

const MainPageBuisnessCarousel: React.FC<IMainPageBuisnessCarousel> = ({ buissnesses }) => {
  const carousel = useRef()
  return (
    <div className="buisness-carousel carousel-container">
      <AliceCarousel
        buttonsDisabled
        dotsDisabled
        infinite={false}
        responsive={{
          767: { items: 4 }
        }}
        ref={carousel}
      >
        {buissnesses.map(({ id, title, content, svg }) => (
          <MainPageBuisnessItem key={id} title={title} content={content} svg={svg} />
        ))}
      </AliceCarousel>
      <Arrow className="carousel-button-left" onClick={() => carousel.current.slidePrev()} />
      <Arrow className="carousel-button-right" onClick={() => carousel.current.slideNext()} />
    </div>
  )
}

export default MainPageBuisnessCarousel
