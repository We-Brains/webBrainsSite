import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SEO from '../components/SEO/SEO'
import PortfolioScreen from '../components/PortfolioScreen/PortfolioScreen'
import FormScreen from '../components/Form/FormScreen'
import Page from '../components/PageView/Page'
import CallBtn from '../components/CallBtn/CallBtn'

const PortfolioPage: React.FC = (): JSX.Element => {
  return (
    <>
      <SEO lang="ru" date="2020-07-08" path="/" noindex={false} />
      <Header />
      <PortfolioScreen />
      <Page className="screen screen-violet form-screen form-page">
        <FormScreen />
      </Page>
      <Footer />
      <CallBtn />
    </>
  )
}

export default PortfolioPage
