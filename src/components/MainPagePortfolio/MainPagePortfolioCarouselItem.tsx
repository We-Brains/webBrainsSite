import React, { useState } from 'react'
import './MainPagePortfolioCarouselItem.scss'
import { IPortfolioSingle } from './Types'
import MainPagePortfolioItemFull from './MainPagePortfolioItemFull'
import ArrowSVG from '../../assets/images/arrow.long.inline.svg'

const MainPagePortfolioCarouselItem: React.FC<IPortfolioSingle> = React.memo(
  ({ title, link, bg, logo, logoSvg, caseImage, image }): JSX.Element => {
    const [showCase, changeShowCase] = useState(false)
    const logoSrc = logo && logo.childImageSharp.original.src
    const imageSrc = image.childImageSharp.fluid.src
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
          className="main-page-portfolio-carousel-item"
          style={{
            background: bg
          }}
        >
          <div className="main-page-portfolio-carousel-item-inner">
            <div className="main-page-portfolio-carousel-item-front">
              {/* <img className="main-page-portfolio-carousel-item-logo" src={logoSrc} alt="" />
              <h4 className="main-page-portfolio-carousel-item-header">{title}</h4> */}
              <div className="main-page-portfolio-carousel-item-logo" dangerouslySetInnerHTML={{ __html: logoSvg }} />
              <button type="button" onClick={() => changeShowCase(true)} className="yellow-btn">
                ПОСМОТРЕТЬ
              </button>
            </div>
            <div className="main-page-portfolio-carousel-item-back">
              <div className="item-back-wrapper">
                <img src={imageSrc} alt="" />
                <div className="main-page-portfolio-carousel-item-back-link">
                  <div onClick={() => changeShowCase(true)} className="circle-arrow">
                    <ArrowSVG />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCase && <MainPagePortfolioItemFull link={link} changeShowCase={changeShowCase} caseImage={caseImage} />}
      </>
    )
  }
)

export default MainPagePortfolioCarouselItem
