import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SEO from '../components/SEO/SEO'
import PortfolioScreen from '../components/PortfolioScreen/PortfolioScreen'
import FormScreen from '../components/Form/FormScreen'
import Page from '../components/PageView/Page'
import CallBtn from '../components/CallBtn/CallBtn'

const PortfolioPage: React.FC = (): JSX.Element => {
  const [currentScreen, setCurrentScreen] = React.useState<number>()
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (currentScreen === 1) {
        const selector = `.${window.innerWidth < 1366 ? 'form-screen' : 'screen-footer'}`
        window.scrollTo({
          top: document.querySelector(selector).offsetTop,
          behavior: 'smooth'
        })
        setCurrentScreen(undefined)
      }
    }
  }, [currentScreen])

  return (
    <>
      <SEO lang="ru" date="2020-07-08" path="/" noindex={false} />
      <Header />
      <PortfolioScreen />
      <Page className="screen screen-violet form-screen form-page">
        <FormScreen />
      </Page>
      <Page className="screen screen-footer screen-dark-gray">
        <Footer />
      </Page>
      <CallBtn onClick={() => setCurrentScreen(1)} />
    </>
  )
}

export default PortfolioPage
