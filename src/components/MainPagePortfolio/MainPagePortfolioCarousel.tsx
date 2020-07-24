import React, { useState } from 'react'
import { IPortfolioCarousel } from './Types'
import Carousel from '../Carousel/Carousel'
import MainPagePortfolioCarouselItem from './MainPagePortfolioCarouselItem'
import Arrow from '../CarouselComponents/Arrow'
import './MainPagePortfolioCarousel.scss'

const MainPagePortfolioCarousel: React.FC<IPortfolioCarousel> = React.memo(
  ({ portfolios }): JSX.Element => {
    const [active, chageActive] = useState(2)
    return (
      <>
        <div className="carousel-container">
          <Carousel
            infinity
            withDots
            buttonPrev={<Arrow className="carousel-button-left" />}
            buttonNext={<Arrow className="carousel-button-right" />}
          >
            {portfolios.map(({ id, title, type, image, caseImage, link }, idx) => (
              <MainPagePortfolioCarouselItem
                key={id}
                title={title}
                type={type}
                image={image}
                link={link}
                caseImage={caseImage}
                className={`${active === idx ? 'main-page-portfolio-carousel-item-active' : ''}`}
                onHover={() => chageActive(idx)}
              />
            ))}
          </Carousel>
        </div>
      </>
    )
  }
)

export default MainPagePortfolioCarousel
