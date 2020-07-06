/* eslint-disable */

require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Разработка сайтов, онлайн магазинов с дизайном под ключ. WebBrains Studio.',
		description:
			'Веб-студия полного цикла по созданию сайтов, лендингов, интернет-магазинов с уникальным дизайном и анализом ниши. На рынке 3 года. Закажи качественный онлайн продукт под ключ',
		siteUrl: 'https://localhost:8000/',
		pathPrefix: '/',
		author: {
			name: 'MMesyats',
			url: 'https://t.me/MMesyats',
			email: 'mmesyatz@gmail.com'
		}
	},
	plugins: [
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://46.101.171.146:80`,
				contentTypes: [
					'services',
					'portfolios',
					'partners',
					'buissness',
					'timeline-items',
					'offers',
					'offer-types',
					'socials',
					'contacts'
				],
				singleTypes: [
					'first-screen',
					'portfolio-screen',
					'partners-screen',
					'buisness-screen',
					'timeline-screen',
					'service-screen',
					'footer-screen'
				],
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
				plugins: []
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
