import React from 'react'

const serviceContext = React.createContext({ toForm: () => {}, currentService: 0 })

export default serviceContext
