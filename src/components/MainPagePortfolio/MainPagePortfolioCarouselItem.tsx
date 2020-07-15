import React from 'react'
import { Link } from 'gatsby'
import './MainPagePortfolioCarouselItem.scss'
import { IPortfolioSingle } from './Types'

const MainPagePortfolioCarouselItem: React.FC<IPortfolioSingle> = React.memo(
  ({
    className = '',
    title,
    content,
    image: {
      childImageSharp: {
        fluid: { src, srcWebp }
      }
    }
  }): JSX.Element => {
    return (
      <div className={`main-page-portfolio-carousel-item ${className}`}>
        <picture className="main-page-portfolio-carousel-item-background">
          <source srcSet={srcWebp} type="image/webp" />
          <img src={src} alt={title} />
        </picture>
        <div className="main-page-portfolio-carousel-item-shadow" />
        <h4 className="main-page-portfolio-carousel-item-header">{title}</h4>
        <p className="main-page-portfolio-carousel-item-info">{content}</p>
        <Link className="main-page-portfolio-carousel-item-link" to="/">
          Подробнее
        </Link>
      </div>
    )
  }
)

export default MainPagePortfolioCarouselItem
