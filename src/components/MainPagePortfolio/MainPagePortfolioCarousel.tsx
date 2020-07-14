import React, { useRef, Suspense } from 'react'
import AliceCarousel, { IAliceCarousel } from 'react-alice-carousel'
import { IPortfolioCarousel } from './Types'
import Arrow from '../CarouselComponents/Arrow'
import './MainPagePortfolioCarousel.scss'
import 'react-alice-carousel/lib/alice-carousel.css'

const MainPagePortfolioCarouselItem = React.lazy(() => import('./MainPagePortfolioCarouselItem'))

const MainPagePortfolioCarousel: React.FC<IPortfolioCarousel> = ({ portfolios }): JSX.Element => {
  const carousel = useRef<IAliceCarousel>()
  return (
    <>
      <div className="carousel-container">
        <AliceCarousel duration={250} ref={carousel} buttonsDisabled>
          {portfolios.map(({ id, title, content, image }) => (
            <>
              {typeof window !== 'undefined' && (
                <Suspense fallback={<div />}>
                  <MainPagePortfolioCarouselItem key={id} title={title} content={content} image={image} />
                </Suspense>
              )}
            </>
          ))}
        </AliceCarousel>
        <Arrow className="carousel-button-left" onClick={() => carousel.current.slidePrev()} />
        <Arrow className="carousel-button-right" onClick={() => carousel.current.slideNext()} />
      </div>
    </>
  )
}

export default MainPagePortfolioCarousel
