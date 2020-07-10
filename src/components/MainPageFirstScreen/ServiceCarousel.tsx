import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import { IServiceCarousel } from './Types'
import ServiceItem from './ServiceItem'
import './ServiceCarousel.scss'
import Arrow from '../CarouselComponents/Arrow'

const ServiceCarousel: React.FC<IServiceCarousel> = ({ services }): JSX.Element => {
  return (
    <>
      <InfiniteCarousel
        nextArrow={<Arrow className="carousel-button-right" onClick={() => {}} />}
        prevArrow={<Arrow className="carousel-button-left" onClick={() => {}} />}
      >
        {services.map(({ id, title, svg, content }) => (
          <ServiceItem key={id} title={title} svg={svg} content={content} />
        ))}
      </InfiniteCarousel>
      <div className="stick" />
    </>
  )
}

export default ServiceCarousel
