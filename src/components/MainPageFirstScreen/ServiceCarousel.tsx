import React from 'react'
import Carousel from 'react-multi-carousel'
import './ServiceCarousel.scss'
import ServiceItem from './ServiceItem'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'
import { IServiceCarousel } from './Types'

const ServiceCarousel: React.FC<IServiceCarousel> = ({ services }): JSX.Element => {
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    },
    other: {
      breakpoint: { max: Infinity, min: 768 },
      items: 3
    }
  }
  return (
    <>
      <Carousel containerClass="service-carousel" responsive={responsive} customButtonGroup={<CarouselButtonGroup />}>
        {services.map(({ id, title, svg, content }) => (
          <ServiceItem key={id} title={title} svg={svg} content={content} />
        ))}
      </Carousel>
      <div className="stick" />
    </>
  )
}

export default ServiceCarousel
