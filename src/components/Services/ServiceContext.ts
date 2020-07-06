import React from 'react'

const serviceContext = React.createContext<IServiceContext>({ toForm: () => {} })

export default serviceContext
