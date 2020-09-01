import React from 'react'
import './MainPageServiceScreen.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Services from '../Services/Services'
import { IMainPageServices } from './Types'

const MAIN_PAGE_SERVICE_SCREEN = graphql`
  query MainPageServiceQuery {
    strapiServiceScreen {
      title
      subtitle
    }
  }
`

const MainPageServiceScreen: React.FC = (): JSX.Element => {
  const {
    strapiServiceScreen: { title, subtitle }
  }: IMainPageServices = useStaticQuery(MAIN_PAGE_SERVICE_SCREEN)
  return (
    <div className="main-page-service-container">
      <div>
        <h2 className="main-page-service-header">{title}</h2>
        <h3 className="main-page-service-header-sub">{subtitle}</h3>
      </div>
      <Services />
      <div className="main-page-service-container-btn yellow-btn">
        <Link to="/portfolio/">ВСЕ РАБОТЫ</Link>
      </div>
    </div>
  )
}

export default MainPageServiceScreen
