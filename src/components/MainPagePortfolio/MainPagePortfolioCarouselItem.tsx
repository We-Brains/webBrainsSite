import React from 'react'
import { Link } from 'gatsby'
import './MainPagePortfolioCarouselItem.scss'
import { IPortfolioSingle } from './Types'

const MainPagePortfolioCarouselItem: React.FC<IPortfolioSingle> = ({
  title,
  content,
  image: {
    childImageSharp: {
      fluid: { src }
    }
  }
}): JSX.Element => {
  return (
    <div className="main-page-portfolio-carousel-item" style={{ backgroundImage: `url(${src})` }}>
      <div className="main-page-portfolio-carousel-item-shadow" />
      <h4 className="main-page-portfolio-carousel-item-header">{title}</h4>
      <p className="main-page-portfolio-carousel-item-info">{content}</p>
      <Link className="main-page-portfolio-carousel-item-link" to="/">
        Подробнее
      </Link>
    </div>
  )
}

export default MainPagePortfolioCarouselItem
