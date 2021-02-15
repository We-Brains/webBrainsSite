import React from 'react'
// Types
import { IPortNodes } from './Types'
// Style
import './PortfolioItem.scss'
// SVG
import ArrowSVG from '../../assets/images/arrow.long.inline.svg'

const PortfolioItem: React.FC<IPortNodes> = ({ node }) => {
  return (
    <div className="portfolio-item">
      <h3 className="portfolio-item__title">{node.title}</h3>
      <p className="portfolio-item__content">{node.content}</p>
      <div className="portfolio-item__image">
        <div style={{ backgroundColor: node.firstColor || 'yellow' }} className="portfolio-item__image-layer" />
        <div style={{ backgroundColor: node.secondColor || 'violet' }} className="portfolio-item__image-layer-second" />
        <div className="portfolio-item__img">
          <img src={node.image.childImageSharp.fluid.src} alt="Portfolio Screen" />
        </div>
      </div>
      <button className="portfolio-item__btn" type="button">
        Посмотреть кейс
      </button>
      <a target="_blank" rel="noreferrer" href={node.link} className="portfolio-item__link">
        Перейти на сайт <ArrowSVG />
      </a>
    </div>
  )
}

export default PortfolioItem
