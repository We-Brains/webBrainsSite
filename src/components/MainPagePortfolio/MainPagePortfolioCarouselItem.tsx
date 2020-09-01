import React, { useState } from 'react'
import './MainPagePortfolioCarouselItem.scss'
import { IPortfolioSingle } from './Types'
import MainPagePortfolioItemFull from './MainPagePortfolioItemFull'

const MainPagePortfolioCarouselItem: React.FC<IPortfolioSingle> = React.memo(
  ({
    onHover,
    className = '',
    title,
    type,
    link,
    caseImage,
    image: {
      childImageSharp: {
        original: { src }
      }
    }
  }): JSX.Element => {
    const [showCase, changeShowCase] = useState(false)
    React.useEffect(() => {
      if (showCase) {
        document.body.classList.add('fixed')
      } else {
        document.body.classList.remove('fixed')
      }
      // showCase ? document.body.classList.add('fixed') : document.body.classList.remove('fixed')
    }, [showCase])
    return (
      <>
        <div
          className={`main-page-portfolio-carousel-item ${className}`}
          onMouseEnter={() => {
            onHover()
          }}
          style={{
            backgroundImage: `url(${src})`
          }}
        >
          <div className="main-page-portfolio-carousel-item-shadow" />
          <h4 className="main-page-portfolio-carousel-item-header">{title}</h4>
          <h5 className="main-page-portfolio-carousel-item-type">{type}</h5>
          <button type="button" onClick={() => changeShowCase(true)} className="yellow-btn">
            ПОСМОТРЕТЬ
          </button>
        </div>
        {showCase && <MainPagePortfolioItemFull link={link} changeShowCase={changeShowCase} caseImage={caseImage} />}
      </>
    )
  }
)

export default MainPagePortfolioCarouselItem
