import { IIDSocial } from '../CommonTypes'

export interface IDefaultSocials {
  className?: string
}

export interface IDefaultSocialQuery {
  allStrapiSocials: {
    nodes: IIDSocial[]
  }
}
