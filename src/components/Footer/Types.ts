import { IIDSocial } from '../CommonTypes'

export interface IFooterQuery {
  strapiFooterScreen: {
    copyright: string
    socials: IIDSocial[]
    contacts: IIDContact[]
  }
}

export interface IFooterSocials {
  socials: IIDSocial[]
}

export interface IFooterContacts {
  contacts: IIDContact[]
}

export interface IIDContact {
  id: number | string
  title: string
  additionalClass: string
  href: string
}
