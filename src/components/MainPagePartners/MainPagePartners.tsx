import React from 'react'
import './MainPagePartners.scss'
import { graphql, useStaticQuery } from 'gatsby'
import MainPagePartnersCarousel from './MainPagePartnersCarousel'

const PARTNERTS_SCREEN_QUERY = graphql`
  query partnersScreenQuery {
    strapiPartnersScreen {
      title
      text
      background {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`

const MainPagePartners: React.FC = (): JSX.Element => {
  const {
    strapiPartnersScreen: {
      title,
      text,
      background: {
        childImageSharp: {
          fluid: { src }
        }
      }
    }
  } = useStaticQuery(PARTNERTS_SCREEN_QUERY)
  return (
    <div className="partners-screen">
      <div className="partners-container" style={{ backgroundImage: `url(${src})` }}>
        <div className="partners-container-shadow" />
        <h2 className="partners-container-header">{title}</h2>
        <h4 className="partners-container-subheader">С кем мы работаем</h4>
        <p className="partners-container-text">
          Наша веб-студия – это гарантия создания качественного веб сайта. Мы реализовали более 50 проектов для клиентов из 6 стран.
          Профессионализм, индивидуальный подход, авторские решения – это далеко не все преимущества, обеспечивающие качество и
          эффективность изготовленных нами проектов.
        </p>
      </div>
      <MainPagePartnersCarousel />
    </div>
  )
}

export default MainPagePartners
