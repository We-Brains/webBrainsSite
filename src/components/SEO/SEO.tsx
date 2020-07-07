import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { ISiteMeta, ISEO } from './Types'

const SEO_QUERY = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        description
        title
        siteUrl
        author {
          name
        }
      }
    }
  }
`

const SEO: React.FC<ISEO> = ({
  descriptionProp = '',
  lang = 'ru',
  titleProp = '',
  path = '',
  canonicalUrl = '/',
  noindex = false,
  date = '2019-07-06'
}): JSX.Element => {
  const {
    site: {
      siteMetadata: {
        description,
        title,
        siteUrl,
        author: { name }
      }
    }
  }: ISiteMeta = useStaticQuery(SEO_QUERY)

  const metaDescription = descriptionProp || description
  const context = 'http://schema.org'

  const schemaOrgJSONLD = [
    {
      '@context': context,
      '@type': 'Organization',
      address: 'г.Киев, Коломыйский переулок 20',
      url: siteUrl,
      name: title,
      telephone: ''
    },
    {
      '@context': context,
      '@type': 'Article',
      datePublished: date,
      dateModified: date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': siteUrl
      },
      url: siteUrl,
      about: titleProp,
      author: name,
      publisher: {
        '@type': 'Organization',
        name: 'WebBrains',
        telephone: '+38(099)-17-92014',
        logo: {
          '@type': 'ImageObject',
          url: siteUrl,
          contentUrl: siteUrl,
          width: 408,
          height: 51
        }
      },
      headline: titleProp,
      inLanguage: lang,
      alternateName: titleProp,
      image: {
        '@type': 'ImageObject',
        url: siteUrl
      }
    }
  ]

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate="%s"
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: titleProp
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]}
    >
      <link rel="canonical" href={`${siteUrl}${canonicalUrl || path}/`} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
    </Helmet>
  )
}

export default SEO
