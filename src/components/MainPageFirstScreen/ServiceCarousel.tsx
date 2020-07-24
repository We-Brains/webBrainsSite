import React, { useContext } from 'react'
import Arrow from '../CarouselComponents/Arrow'
import ServiceItem from './ServiceItem'
import { IServiceCarousel } from './Types'
import './ServiceCarousel.scss'
import Carousel from '../Carousel/Carousel'
import FirstScreenContext from './FirstScreenContext'

const ServiceCarousel: React.FC<IServiceCarousel> = ({ services }): JSX.Element => {
  const { changeService } = useContext(FirstScreenContext)
  return (
    <div className="carousel-container">
      <Carousel
        infinity={false}
        buttonPrev={<Arrow className="carousel-button-left" />}
        buttonNext={<Arrow className="carousel-button-right" />}
      >
        {services.map(({ id, title, svg, content }, idx) => (
          <ServiceItem
            key={id}
            title={title}
            svg={svg}
            content={content}
            onClick={() => {
              changeService(idx)
            }}
          />
        ))}
      </Carousel>
      <div className="stick" />
    </div>
  )
}

export default ServiceCarousel
