import React, { useState, useEffect, EventHandler, SyntheticEvent } from 'react'
import PageView from '@mmesyats/page-view/src/PageView'
import Page from '@mmesyats/page-view/src/Page'
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

const IndexPage: React.FC = (): JSX.Element => {
  const [currentScreen, changeScreen] = useState<number>(0)
  return (
    <>
      <SEO lang="ru" date="2020-06-07" path="/" noindex={false} />
      <PageView propPage={currentScreen} changePropPage={changeScreen}>
        <Page className="screen">
          <Header />
          <MainPageFirstScreen toForm={() => changeScreen(6)} />
        </Page>
        <Page className="screen screen-gray">
          <serviceContext.Provider value={{ toForm: () => changeScreen(6) }}>
            <MainPageServiceScreen />
          </serviceContext.Provider>
        </Page>
        <Page className="screen screen-dark-gray">
          <MainPagePortfolio />
        </Page>
        <Page className="screen screen-gray">
          <MainPagePartners />
        </Page>
        <Page className="screen screen-dark-gray">
          <MainPageTimeline isCurrent={currentScreen === 4} />
        </Page>
        <Page className="screen screen-gray">
          <MainPageBuisness />
        </Page>
        <Page className="screen screen-violet form-screen">
          <Form />
        </Page>
        <Page className="screen screen-footer screen-dark-gray">
          <Footer />
        </Page>
      </PageView>
      <CallBtn onClick={() => changeScreen(6)} />
    </>
  )
}
export default IndexPage
