import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './NotFound.scss'
import { INotFoundQuery } from './Types'
import Socials from '../DefaultComponents/Socials'

const NOT_FOUND_QUERY = graphql`
  query NotFoundQuery {
    strapiNotFoundScreen {
      title
      text
      linkText
      svg
    }
  }
`

const NotFound: React.FC = (): JSX.Element => {
  const {
    strapiNotFoundScreen: { title, text, linkText, svg }
  }: INotFoundQuery = useStaticQuery(NOT_FOUND_QUERY)
  return (
    <div className="not-found-content">
      <h1 className="not-found-header" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="not-found-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      <h3 className="not-found-text">{text}</h3>
      <Link to="/" className="not-found-link">
        {linkText}
      </Link>
      <Socials className="not-found-socials" />
      <div className="default-socials-stick" />
    </div>
  )
}

export default NotFound
