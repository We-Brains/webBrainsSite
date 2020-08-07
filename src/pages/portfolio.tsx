import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SEO from '../components/SEO/SEO'
import PortfolioScreen from '../components/PortfolioScreen/PortfolioScreen'

const PortfolioPage: React.FC = (): JSX.Element => {
  return (
    <>
      <SEO lang="ru" date="2020-07-08" path="/" noindex={false} />
      <Header />
      <PortfolioScreen />
      <Footer />
    </>
  )
}

export default PortfolioPage
