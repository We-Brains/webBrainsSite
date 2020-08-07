import React from 'react'
import Carousel from '../Carousel/Carousel'
import { ITrustCarousel } from './Types'
import './TrustCarousel.scss'
import Arrow from '../CarouselComponents/Arrow'

const TrustCarousel: React.FC<ITrustCarousel> = ({ partners }): JSX.Element => {
  return (
    <Carousel buttonPrev={<Arrow className="carousel-button-left" />} buttonNext={<Arrow className="carousel-button-right" />}>
      {partners.map(({ id, title, image: { childImageSharp: { original: { src } } } }) => (
        <div key={id}>
          <img src={src} alt={title} />
        </div>
      ))}
    </Carousel>
  )
}

export default TrustCarousel
