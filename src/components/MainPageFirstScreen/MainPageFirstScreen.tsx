import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Background from './Background'
import './MainPageFirstScreen.scss'
import { IFirstScreenData, IMainPageFirstScreen } from './Types'
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
      socials {
        id
        title
        href
        svg
      }
    }
  }
`

const MainPageFirstScreen: React.FC<IMainPageFirstScreen> = ({ toForm }): JSX.Element => {
  const {
    strapiFirstScreen: { title, btnText, services, background, socials }
  }: IFirstScreenData = useStaticQuery(FIRST_SCREEN_QUERY)
  return (
    <>
      <Background background={background} />
      <div className="main-page">
        <div className="main-page-content">
          <h1 className="main-page-content-title" dangerouslySetInnerHTML={{ __html: title }} />
          <button type="button" className="main-page-content-button" onClick={toForm}>
            {btnText}
          </button>
          <div className="main-page-content-social">
            {socials.map(({ id, title: linkTitle, href, svg }) => (
              <a
                key={id}
                className="main-page-content-social-link"
                href={href}
                title={linkTitle}
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            ))}
          </div>
        </div>
        <ServiceCarousel services={services} />
      </div>
    </>
  )
}

export default MainPageFirstScreen
