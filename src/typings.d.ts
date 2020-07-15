interface CSSModule {
  [className: string]: string
}

// type shims for CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.css' {
  const cssModule: CSSModule
  export = cssModule
}

declare module '*.inline.svg' {
  const content: ReactFC<ISVG>
  export interface ISVG {
    className: string
  }
  export default content
}

declare module 'react-alice-carousel' {
  export interface IAliceCarousel {
    duration?: number
    ref: React.Ref
    buttonsDisabled?: boolean
    dotsDisabled?: boolean
    infinite?: boolean
    responsive?: any
    slideNext?: () => void
    slidePrev?: () => void
  }
  const AliceCarousel: React.CC<IAliceCarousel>
  export default AliceCarousel
}

declare module 'react-fullpage' {
  export interface ISection {
    className?: string
  }

  export interface ISectionContainer {
    activeSection: number
    arrowNavigation: boolean
    anchors: string[]
    className: string
    delay: number
    navigation: boolean
    scrollBar: boolean
    sectionClassName: string
    sectionPaddingTop: string
    sectionPaddingBottom: string
    verticalAlign: boolean
    scrollCallback: ({ activeSection }: IScrollCallback) => void
  }

  export interface IScrollCallback {
    activeSection: number
  }

  export const Section: React.FC<ISection>
  export const SectionsContainer: React.FC<ISectionContainer>
}
