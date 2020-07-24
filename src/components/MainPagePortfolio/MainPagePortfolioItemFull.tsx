import React from 'react'
import ReactDOM from 'react-dom'
import './MainPagePortfolioItemFull.scss'
import { IMainPagePortfolioItemFull } from './Types'

const MainPagePortfolioItemFull: React.FC<IMainPagePortfolioItemFull> = ({ changeShowCase, caseImage }): JSX.Element => {
  return ReactDOM.createPortal(
    <div className="portfolio-case">
      <div
        className="portfolio-case-close-block"
        onClick={e => {
          changeShowCase(false)
        }}
      />
      <button
        type="button"
        className="portfolio-case-close"
        onClick={() => {
          changeShowCase(false)
        }}
      >
        x
      </button>
      <div className="portfolio-case-image-container">
        {caseImage !== null && <img className="portfolio-case-image" src={caseImage.childImageSharp.original.src} alt="img" />}
      </div>
    </div>,
    typeof document !== 'undefined' ? document.getElementById('portal') : null
  )
}

export default MainPagePortfolioItemFull