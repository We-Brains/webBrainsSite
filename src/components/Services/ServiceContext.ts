import React from 'react'
import { IServiceContext } from './Types'

const serviceContext = React.createContext<IServiceContext>({ toForm: () => {}, currentService: 0 })

export default serviceContext
