import React from 'react'
import './Background.scss'
import { IBackground } from './Types'

const Background: React.FC<IBackground> = ({ background }): JSX.Element => {
  return (
    <div className="bg">
      <div className="bg-filled" />
      <div className="bg-img" style={{ backgroundImage: `url(${background.childImageSharp.fluid.src})` }} />
    </div>
  )
}

export default Background
