import React from 'react'
import { ButtonGroupProps } from 'react-multi-carousel/lib/types'
import Arrow from './Arrow'

const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems }
  } = rest
  return (
    <div className="carousel-button-group">
      <Arrow
        className={`carousel-button-left ${currentSlide === 0 ? 'carousel-button-disabled' : ''}`}
        onClick={() => {
          previous()
        }}
      />
      <Arrow
        className={`carousel-button-right ${currentSlide === totalItems ? 'carousel-button-disabled' : ''}`}
        onClick={() => {
          next()
        }}
      />
    </div>
  )
}

export default CarouselButtonGroup
