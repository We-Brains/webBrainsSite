import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Socials from '../DefaultComponents/Socials'
import Logo from '../../assets/images/logo.white.violet.inline.svg'
import './AboutScreen.scss'
import { IAboutScreenQuery } from './Types'

const ABOUT_US_QUERY = graphql`
  query AboutUsQuery {
    strapiAboutUsScreen {
      title
      subtitle
      text
      svg
      infotext
      yellowAchivement {
        number
        title
      }
      achivements {
        number
        title
      }
    }
  }
`

const AboutScreen: React.FC = (): JSX.Element => {
  const {
    strapiAboutUsScreen: {
      title,
      subtitle,
      text,
      svg,
      infotext,
      yellowAchivement: { number: yellowAchivmentNuber, title: yellowAchivmentTitle },
      achivements
    }
  }: IAboutScreenQuery = useStaticQuery(ABOUT_US_QUERY)
  return (
    <div className="about">
      <div className="about-headers">
        <h2 className="default-header">{title}</h2>
        <h4 className="default-header-sub">{subtitle}</h4>
      </div>
      <p className="about-text">{text}</p>
      <div className="about-video" dangerouslySetInnerHTML={{ __html: svg }} />
      <div className="about-info">
        <div className="about-info-item about-info-item-yellow">
          <div className="about-info-item-number ">{yellowAchivmentNuber}</div>
          <div className="about-info-item-text" dangerouslySetInnerHTML={{ __html: yellowAchivmentTitle }} />
        </div>
        <div className="about-info-text" dangerouslySetInnerHTML={{ __html: infotext }} />
        {achivements.map(({ number: achivmentNumber, title: achivmentTitle }) => (
          <div className="about-info-item">
            <div className="about-info-item-number ">{achivmentNumber}</div>
            <div className="about-info-item-text" dangerouslySetInnerHTML={{ __html: achivmentTitle }} />
          </div>
        ))}
      </div>
      <Socials />
      <div className="default-socials-stick" />
    </div>
  )
}

export default AboutScreen
