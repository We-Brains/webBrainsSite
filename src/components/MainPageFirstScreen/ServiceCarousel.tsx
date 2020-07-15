import React, { useRef } from 'react'
import AliceCarousel, { IAliceCarousel } from 'react-alice-carousel'
import Arrow from '../CarouselComponents/Arrow'
import ServiceItem from './ServiceItem'
import { IServiceCarousel } from './Types'
import './ServiceCarousel.scss'

const ServiceCarousel: React.FC<IServiceCarousel> = ({ services }): JSX.Element => {
  const carousel = useRef<IAliceCarousel>()
  return (
    <div className="carousel-container">
      <AliceCarousel
        buttonsDisabled
        dotsDisabled
        infinite={false}
        responsive={{
          767: { items: 3 }
        }}
        ref={carousel}
      >
        {services.map(({ id, title, svg, content }) => (
          <ServiceItem key={id} title={title} svg={svg} content={content} />
        ))}
      </AliceCarousel>
      <Arrow className="carousel-button-left" onClick={() => carousel.current.slidePrev()} />
      <Arrow className="carousel-button-right" onClick={() => carousel.current.slideNext()} />
      <div className="stick" />
    </div>
  )
}

export default ServiceCarousel
