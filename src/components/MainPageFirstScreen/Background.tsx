import React from 'react'
import './Background.scss'
import { IImage } from '../MainPagePortfolio/Types'

const Background: React.FC<IImage> = ({
  background: {
    childImageSharp: {
      fluid: { src }
    }
  }
}): JSX.Element => {
  return (
    <div className="bg">
      <div className="bg-filled" />
      <div className="bg-img" style={{ backgroundImage: `url(${src})` }} />
    </div>
  )
}

export default Background
