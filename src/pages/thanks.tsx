import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO/SEO'
import Header from '../components/Header/Header'
import FormScreen from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import CallBtn from '../components/CallBtn/CallBtn'
import FormResultScreen from '../components/FormResultScreen/FormResultScreen'
import Page from '../components/PageView/Page'

const ThanksPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>(0)
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.scrollTo({
        top: currentScreen * window.innerHeight,
        behavior: 'smooth'
      })
  }, [currentScreen])

  return (
    <>
      <SEO lang="ru" date="2020-06-07" path="/" noindex={false} />

      <Page className="screen screen-gray">
        <Header />
        <FormResultScreen />
      </Page>
      <Page className="screen screen-violet form-screen">
        <FormScreen />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => changeScreen(2)} />
    </>
  )
}

export default ThanksPage
