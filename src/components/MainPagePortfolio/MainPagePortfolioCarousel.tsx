import React, { useState } from 'react'
import { IPortfolioCarousel } from './Types'
import Carousel from '../Carousel/Carousel'
import MainPagePortfolioCarouselItem from './MainPagePortfolioCarouselItem'
import Arrow from '../CarouselComponents/Arrow'
import './MainPagePortfolioCarousel.scss'

const MainPagePortfolioCarousel: React.FC<IPortfolioCarousel> = React.memo(
  ({ portfolios }): JSX.Element => {
    const [active, changeActive] = useState(2)
    return (
      <>
        <div className="carousel-container">
          <Carousel
            infinity
            withDots
            buttonPrev={<Arrow className="carousel-button-left" />}
            buttonNext={<Arrow className="carousel-button-right" />}
          >
            {portfolios
              .filter((item) => item.logo !== null)
              .map(({ id, title, logo, link, mainPageBg, image, caseImage }, idx) => (
                <MainPagePortfolioCarouselItem
                  key={id}
                  title={title}
                  image={image}
                  logo={logo}
                  link={link}
                  bg={mainPageBg}
                  caseImage={caseImage}
                  className={`${active === idx ? 'main-page-portfolio-carousel-item-active' : ''}`}
                  onHover={() => changeActive(idx)}
                />
              ))}
          </Carousel>
        </div>
      </>
    )
  }
)

export default MainPagePortfolioCarousel
