import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Background from './Background'
import TelegramIcon from '../../assets/images/telegram.inline.svg'
import './MainPageFirstScreen.scss'
import { IFirstScreenData } from './Types'
import ServiceCarousel from './ServiceCarousel'

const FIRST_SCREEN_QUERY = graphql`
  query firstScreenQuery {
    strapiFirstScreen {
      title
      btnText
      background {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      services {
        id
        svg
        title
        content
      }
    }
  }
`

const MainPageFirstScreen: React.FC = (): JSX.Element => {
  const {
    strapiFirstScreen: { title, btnText, services, background }
  }: IFirstScreenData = useStaticQuery(FIRST_SCREEN_QUERY)
  return (
    <>
      <Background background={background} />
      <div className="main-page">
        <div className="main-page-content">
          <h1 className="main-page-content-title" dangerouslySetInnerHTML={{ __html: title }} />
          <button type="button" className="main-page-content-button">
            {btnText}
          </button>
          <div className="main-page-content-social">
            <a className="main-page-content-social-link" href="https://www.instagram.com">
              <TelegramIcon />
            </a>
            <a className="main-page-content-social-link" href="https://www.instagram.com">
              <TelegramIcon />
            </a>
            <a className="main-page-content-social-link" href="https://www.instagram.com">
              <TelegramIcon />
            </a>
            <a className="main-page-content-social-link" href="https://www.instagram.com">
              <TelegramIcon />
            </a>
          </div>
        </div>
        <ServiceCarousel services={services} />
      </div>
    </>
  )
}

export default MainPageFirstScreen
