import { IIDContact } from '../Footer/Types'
import { IIDSocial } from '../CommonTypes'

export interface IFormResultQuery {
  strapiFormResultScreen: {
    title: string
    contactTitle: string
    contacts: IIDContact[]
    btnText: string
    svg: string
    socials: IIDSocial[]
  }
}
