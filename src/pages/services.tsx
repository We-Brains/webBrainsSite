import React, { useState, useEffect } from 'react'
import Page from '../components/PageView/Page'
import SEO from '../components/SEO/SEO'
import Header from '../components/Header/Header'
import Form from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import CallBtn from '../components/CallBtn/CallBtn'
import ServiceScreen from '../components/ServiceScreen/ServiceScreen'
import serviceContext from '../components/Services/ServiceContext'

const ThanksPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (currentScreen === 1) {
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
      <SEO lang="ru" date="2020-06-07" path="/services" noindex={false} />
      <Page className=" screen screen-gray">
        <Header currentScreen={currentScreen} changeScreen={() => changeScreen(1)} />
        <serviceContext.Provider value={{ toForm: () => changeScreen(1) }}>
          <ServiceScreen />
        </serviceContext.Provider>
      </Page>
      <Page className="screen screen-violet form-screen">
        <Form />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => changeScreen(1)} />
    </>
  )
}

export default ThanksPage
