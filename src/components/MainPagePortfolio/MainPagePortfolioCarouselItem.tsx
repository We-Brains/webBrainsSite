import React, { useState } from 'react'
import './MainPagePortfolioCarouselItem.scss'
import { IPortfolioSingle } from './Types'
import MainPagePortfolioItemFull from './MainPagePortfolioItemFull'

const MainPagePortfolioCarouselItem: React.FC<IPortfolioSingle> = React.memo(
  ({
    onHover,
    className = '',
    title,
    link,
    bg,
    logo
    // caseImage,
  }): JSX.Element => {
    const logoSrc = logo && logo.childImageSharp.original.src
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
            background: bg
          }}
        >
          <img className="main-page-portfolio-carousel-item-logo" src={logoSrc} alt="" />
          <h4 className="main-page-portfolio-carousel-item-header">{title}</h4>
          <button type="button" onClick={() => changeShowCase(true)} className="yellow-btn">
            ПОСМОТРЕТЬ
          </button>
        </div>
        {showCase && <MainPagePortfolioItemFull link={link} changeShowCase={changeShowCase} caseImage="img" />}
      </>
    )
  }
)

export default MainPagePortfolioCarouselItem
