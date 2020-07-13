import React, { useEffect, useState } from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import SEO from '../components/SEO/SEO'
import Header from '../components/Header/Header'
import FormScreen from '../components/Form/FormScreen'
import Footer from '../components/Footer/Footer'
import CallBtn from '../components/CallBtn/CallBtn'
import ServiceScreen from '../components/ServiceScreen/ServiceScreen'
import { IScrollCallbackArgs } from '../components/CommonTypes'

const changeAnchorsOnResize = ({ target: window }: ITargetWindow | Event, changeAnchors: (arg0: string[]) => void) => {
  if (typeof window !== 'undefined' && typeof window.innerWidth !== 'undefined') {
    if (window.innerWidth < 1366) changeAnchors(['Main', 'Form', 'Footer'])
    else changeAnchors(['Main', 'Footer'])
  }
}

const ThanksPage: React.FC = (): JSX.Element => {
  const [anchors, changeAnchors] = useState<string[]>(['Main', 'Form', 'Footer'])
  const [currentScreen, changeScreen] = useState<number>(0)
  useEffect(() => {
    const handler: (e: ITargetWindow | Event) => void = e => {
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
    <>
      <SEO lang="ru" date="2020-06-07" path="/services" noindex={false} />
      <SectionsContainer activeSection={currentScreen} {...options}>
        <Section className="screen-gray">
          <Header />
          <ServiceScreen />
        </Section>
        {anchors.includes('Form') && (
          <Section className="screen-violet">
            <FormScreen />
          </Section>
        )}
        <Section className="screen-footer screen-dark-gray">
          <Footer />
        </Section>
      </SectionsContainer>
      <CallBtn onClick={() => changeScreen(2)} />
    </>
  )
}

export default ThanksPage
