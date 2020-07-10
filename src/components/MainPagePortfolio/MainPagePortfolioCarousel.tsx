/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import MainPagePortfolioCarouselItem from './MainPagePortfolioCarouselItem'
import { IPortfolioCarousel } from './Types'
import Arrow from '../CarouselComponents/Arrow'

const MainPagePortfolioCarousel: React.FC<IPortfolioCarousel> = ({ portfolios }): JSX.Element => {
  const [currentSlide, changeSlide] = useState<number>(0)
  return (
    <>
      <InfiniteCarousel
        nextArrow={<Arrow className="carousel-button-right" onClick={() => {}} />}
        prevArrow={<Arrow className="carousel-button-left" onClick={() => {}} />}
        breakpoints={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]}
        slidesToShow={3}
        slidesToScroll={1}
        onNextClick={(slide: number) => {
          console.log(slide)
        }}
      >
        {portfolios.map(({ id, title, content, image }, idx) => (
          <MainPagePortfolioCarouselItem
            className={`${
              idx === currentSlide
                ? 'prev-slide'
                : idx - 1 === currentSlide
                ? 'current-slide'
                : idx - 2 === currentSlide
                ? 'next-slide'
                : ''
            }`}
            key={id}
            title={title}
            content={content}
            image={image}
          />
        ))}
      </InfiniteCarousel>
    </>
  )
}

export default MainPagePortfolioCarousel
