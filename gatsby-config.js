/* eslint-disable */

require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'gatsby-starter-typescript-plus',
		description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
		keywords: 'gatsbyjs, gatsby, javascript, sample, something',
		siteUrl: 'https://localhost:8000/',
		pathPrefix: '/',
		author: {
			name: 'Resi Respati',
			url: 'https://twitter.com/resir014',
			email: 'resir014@gmail.com'
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://46.101.171.146:80`,
				contentTypes: [ 'services', 'portfolios', 'partners' ],
				singleTypes: [ 'first-screen', 'portfolio-screen', 'partners-screen', 'buisness-screen' ],
				queryLimit: 1000,
				loginData: {
					identifier: process.env.LOGIN,
					password: process.env.PASSWORD
				}
			}
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Oswald',
							fontDisplay: 'swap',
							strategy: 'selfHosted',
							subsets: [ 'latin', 'cyrillic' ]
						},
						{
							family: 'Roboto Condensed',
							fontDisplay: 'swap',
							strategy: 'selfHosted',
							subsets: [ 'latin', 'cyrillic' ]
						}
					]
				},
				useMinify: true,
				usePreload: true
			}
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-custom-blocks',
						options: {
							blocks: {
								danger: {
									classes: 'danger'
								},
								info: {
									classes: 'info',
									title: 'optional'
								}
							}
						}
					}
				]
			}
		},
		'gatsby-plugin-typescript',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-preact`
	]
};
