import React from 'react'
import CallIcon from '../../assets/images/call.inline.svg'
import './CallBtn.scss'

const CallBtn: React.FC = (): JSX.Element => {
  return (
    <div className="call-btn">
      <CallIcon />
    </div>
  )
}

export default CallBtn
