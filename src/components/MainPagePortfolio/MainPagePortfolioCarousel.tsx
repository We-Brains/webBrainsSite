import React from 'react'
import Carousel from 'react-multi-carousel'
import MainPagePortfolioCarouselItem from './MainPagePortfolioCarouselItem'
import CarouselButtonGroup from '../CarouselComponents/ArrowGroup'
import { IPortfolioCarousel } from './Types'

const MainPagePortfolioCarousel: React.FC<IPortfolioCarousel> = ({ portfolios }): JSX.Element => {
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    },
    tablet: {
      breakpoint: { max: Infinity, min: 768 },
      items: 1,
      partialVisibilityGutter: 350
    }
  }
  return (
    <>
      <Carousel
        containerClass="main-page-portfolio-carousel"
        responsive={responsive}
        customButtonGroup={<CarouselButtonGroup />}
        centerMode={typeof window !== 'undefined' && window.innerWidth >= 768}
        infinite
        showDots
        renderDotsOutside
      >
        {portfolios.map(({ id, title, content, image }) => (
          <MainPagePortfolioCarouselItem key={id} title={title} content={content} image={image} />
        ))}
      </Carousel>
    </>
  )
}

export default MainPagePortfolioCarousel
