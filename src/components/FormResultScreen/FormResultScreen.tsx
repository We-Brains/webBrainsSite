import React from 'react'
import './FormResultScreen.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { IFormResultQuery } from './Types'

const FORM_RESULT_QUERY = graphql`
  query FormResultQuery {
    strapiFormResultScreen {
      title
      contactTitle
      contacts {
        id
        title
        additionalClass
        href
      }
      btnText
      svg
      socials {
        id
        title
        href
        svg
      }
    }
  }
`

const FormResultScreen: React.FC = (): JSX.Element => {
  const {
    strapiFormResultScreen: { title, contactTitle, contacts, btnText, svg, socials }
  }: IFormResultQuery = useStaticQuery(FORM_RESULT_QUERY)
  return (
    <div className="form-result">
      <div>
        <div className="form-result-header-container">
          <h1 className="form-result-header">{title}</h1>
          <div className="form-result-socials default-socials">
            {socials.map(({ id, title: socialTitle, href, svg: socialSvg }) => (
              <a
                key={id}
                href={href}
                className="default-socials-link"
                title={socialTitle}
                dangerouslySetInnerHTML={{ __html: socialSvg }}
              />
            ))}
          </div>
        </div>
        <div className="form-result-contacts">
          <h3 className="form-result-contacts-header">{contactTitle}</h3>
          <ul className="form-result-contacts-list">
            {contacts.map(({ id, title: linkTitle, additionalClass, href }) => (
              <li
                key={id}
                className={`form-result-contacts-list-item ${additionalClass !== 'undefined' &&
                  `form-result-contacts-list-item-${additionalClass}`}`}
              >
                <a href={href} title={linkTitle}>
                  {linkTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="form-result-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      <Link className="yellow-btn" to="/">
        {btnText}
      </Link>
    </div>
  )
}

export default FormResultScreen
