import React, { useState } from 'react'
import Page from '../components/PageView/Page'
import Header from '../components/Header/Header'
import FormScreen from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import AboutScreen from '../components/AboutScreen/AboutScreen'
import CallBtn from '../components/CallBtn/CallBtn'

const AboutPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>(0)
  return (
    <>
      <Page className="screen screen-footer screen-gray">
        <Header />
        <AboutScreen />
      </Page>
      <Page className="screen screen-violet form-screen form-page">
        <FormScreen />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => changeScreen(1)} />
    </>
  )
}

export default AboutPage
