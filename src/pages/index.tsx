import React, { useState, useEffect } from 'react'
import Page from '../components/PageView/Page'
import Header from '../components/Header/Header'
import MainPageFirstScreen from '../components/MainPageFirstScreen/MainPageFirstScreen'
import CallBtn from '../components/CallBtn/CallBtn'
import MainPageServiceScreen from '../components/MainPageServiceScreen/MainPageServiceScreen'
import MainPagePortfolio from '../components/MainPagePortfolio/MainPagePortfolio'
import MainPagePartners from '../components/MainPagePartners/MainPagePartners'
import MainPageTimeline from '../components/MainPageTimeline/MainPageTimeline'
import MainPageBuisness from '../components/MainPageBuisness/MainPageBuisness'
import '../layouts.scss'
import Form from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import serviceContext from '../components/Services/ServiceContext'
import SEO from '../components/SEO/SEO'
import FirstScreenContext from '../components/MainPageFirstScreen/FirstScreenContext'

const IndexPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>(0)
  const [currentService, changeService] = useState<number>()
  useEffect(() => {
    if (typeof currentService !== 'undefined') changeScreen(1)
  }, [currentService])
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
      <Page className="screen screen-dark-gray">
        <Header />
        <FirstScreenContext.Provider value={{ changeService: number => changeService(number) }}>
          <MainPageFirstScreen toForm={() => changeScreen(6)} />
        </FirstScreenContext.Provider>
      </Page>
      <Page className="screen screen-gray screen-auto">
        <serviceContext.Provider value={{ toForm: () => changeScreen(6), currentService }}>
          <MainPageServiceScreen />
        </serviceContext.Provider>
      </Page>
      <Page className="screen screen-gray screen-auto">
        <MainPagePortfolio />
      </Page>
      <Page className="screen screen-gray screen-auto">
        <MainPagePartners />
      </Page>
      <Page className="screen screen-dark-gray">
        <MainPageTimeline isCurrent={currentScreen === 4} />
      </Page>
      <Page className="screen screen-gray screen-auto">
        <MainPageBuisness />
      </Page>
      <Page className="screen screen-violet form-screen">
        <Form />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => changeScreen(6)} />
    </>
  )
}
export default IndexPage
