import React from 'react'
import MainPageBuisnessItem from './MainPageBuisnessItem'
import './MainPageBuisnessCarousel.scss'
import { IMainPageBuisnessCarousel } from './Types'
import Arrow from '../CarouselComponents/Arrow'
import Carousel from '../Carousel/Carousel'

const MainPageBuisnessCarousel: React.FC<IMainPageBuisnessCarousel> = ({ buissnesses }) => {
  return (
    <div className="buisness-carousel carousel-container">
      <Carousel
        infinity={false}
        buttonPrev={<Arrow className="carousel-button-left" />}
        buttonNext={<Arrow className="carousel-button-right" />}
      >
        {buissnesses.map(({ id, title, content, svg }) => (
          <MainPageBuisnessItem key={id} title={title} content={content} svg={svg} />
        ))}
      </Carousel>
    </div>
  )
}

export default MainPageBuisnessCarousel
