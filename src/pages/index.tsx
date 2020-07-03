import React, { useState, useEffect } from 'react'
import { SectionsContainer, Section, ScrollToTopOnMount } from 'react-fullpage'
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

const changeAnchorsOnResize = ({ target: window }, changeAnchors) => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 1366) changeAnchors(['Main', 'NotMain', 'Portfolio', 'Partners', 'Timeline', 'Buisness', 'Form', 'Footer'])
    else changeAnchors(['Main', 'NotMain', 'Portfolio', 'Partners', 'Timeline', 'Buisness', 'Footer'])
  }
}

const IndexPage: React.FC = (): JSX.Element => {
  const [anchors, changeAnchors] = useState(['Main', 'NotMain', 'Portfolio', 'Partners', 'Timeline', 'Buisness', 'Form', 'Footer'])
  const [currentScreen, changeScreen] = useState<number>(0)
  useEffect(() => {
    const handler = e => {
      changeAnchorsOnResize(e, changeAnchors)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handler)
      changeAnchorsOnResize({ target: window }, changeAnchors)
    }
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('resize', handler)
    }
  }, [])

  const options = {
    activeSection: 0,
    activeClass: 'active',
    arrowNavigation: true,
    anchors,
    className: 'SectionContainer',
    delay: 1000,
    navigation: false,
    scrollBar: false,
    sectionClassName: 'screen',
    sectionPaddingTop: '0',
    sectionPaddingBottom: '0',
    verticalAlign: false,
    scrollCallback: ({ activeSection }: IScrollCallbackArgs) => changeScreen(activeSection)
  }
  return (
    <div>
      <SectionsContainer {...options}>
        <Section>
          <Header />
          <MainPageFirstScreen />
        </Section>
        <Section className="screen-gray">
          <MainPageServiceScreen />
        </Section>
        <Section className="screen-dark-gray">
          <MainPagePortfolio />
        </Section>
        <Section className="screen-gray">
          <MainPagePartners />
        </Section>
        <Section className="screen-dark-gray">
          <MainPageTimeline isCurrent={currentScreen === 4} />
        </Section>
        <Section className="screen-gray">
          <MainPageBuisness />
        </Section>
        {anchors.includes('Form') && (
          <Section className="screen-violet">
            <Form />
          </Section>
        )}
        <Section className="screen-footer screen-dark-gray">
          <Footer />
        </Section>
      </SectionsContainer>
      <CallBtn />
    </div>
  )
}
export default IndexPage
