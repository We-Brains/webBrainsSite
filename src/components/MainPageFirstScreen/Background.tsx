import React from 'react'
import './Background.scss'
import { IBackground } from './Types'

const Background: React.FC<IBackground> = ({
  background: {
    childImageSharp: {
      fluid: { src, srcWebp }
    }
  }
}): JSX.Element => {
  return (
    <div className="bg">
      <div className="bg-filled" />
      <picture className="bg-img">
        <source src={srcWebp} type="image/webp" />
        <img src={src} alt="background" />
      </picture>
    </div>
  )
}

export default Background
