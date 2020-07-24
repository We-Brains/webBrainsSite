import React, { useState } from 'react'
import Page from '../components/PageView/Page'
import SEO from '../components/SEO/SEO'
import Header from '../components/Header/Header'
import Form from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import CallBtn from '../components/CallBtn/CallBtn'
import ServiceScreen from '../components/ServiceScreen/ServiceScreen'

const ThanksPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>(0)

  return (
    <>
      <SEO lang="ru" date="2020-06-07" path="/services" noindex={false} />
      <Page className=" screen screen-gray">
        <Header />
        <ServiceScreen />
      </Page>
      <Page className="screen screen-violet form-screen">
        <Form />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => changeScreen(2)} />
    </>
  )
}

export default ThanksPage
