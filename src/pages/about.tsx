import React, { useState, useEffect } from 'react'
import Page from '../components/PageView/Page'
import Header from '../components/Header/Header'
import FormScreen from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import AboutScreen from '../components/AboutScreen/AboutScreen'
import CallBtn from '../components/CallBtn/CallBtn'
import TrustScreen from '../components/TrustScreen/TrustScreen'
import SEO from '../components/SEO/SEO'

const AboutPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (currentScreen === 2) {
        const selector = `.${window.innerWidth < 1366 ? 'form-screen' : 'screen-footer'}`
        window.scrollTo({
          top: document.querySelector(selector).offsetTop,
          behavior: 'smooth'
        })
        changeScreen(undefined)
      }
    }
  }, [currentScreen])
  return (
    <>
      <SEO lang="ru" date="2020-28-07" path="/" noindex={false} />
      <Page className="screen screen-gray">
        <Header currentScreen={currentScreen} changeScreen={() => changeScreen(2)} />
        <AboutScreen />
      </Page>
      <Page className="screen screen-gray screen-auto">
        <TrustScreen changeScreen={() => changeScreen(2)} />
      </Page>
      <Page className="screen screen-violet form-screen form-page">
        <FormScreen />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => changeScreen(2)} />
    </>
  )
}

export default AboutPage
