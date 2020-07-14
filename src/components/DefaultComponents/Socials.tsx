import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IDefaultSocialQuery } from './Types'

const DEFAULT_SOCIAL_QUERY = graphql`
  query DefaultSocialQuery {
    allStrapiSocials {
      nodes {
        id
        title
        href
        svg
      }
    }
  }
`

const Socials: React.FC = ({ className = '' }): JSX.Element => {
  const {
    allStrapiSocials: { nodes: socials }
  }: IDefaultSocialQuery = useStaticQuery(DEFAULT_SOCIAL_QUERY)
  return (
    <div className={`default-socials ${className}`}>
      {socials.map(({ id, title, href, svg }) => (
        <a key={id} href={href} className="default-socials-link" title={title} dangerouslySetInnerHTML={{ __html: svg }} />
      ))}
    </div>
  )
}
export default Socials
