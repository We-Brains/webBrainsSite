import React, { useState, useEffect } from 'react'
import Page from '@mmesyats/page-view/src/Page'
import Header from '../components/Header/Header'
import FormScreen from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'

const ContactsPage = () => {
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
      <Page className="screen screen-footer screen-dark-gray">
        <Header />
        <Footer isSingle />
      </Page>
      <Page className="screen screen-violet form-screen form-page">
        <FormScreen />
      </Page>
    </>
  )
}

export default ContactsPage
