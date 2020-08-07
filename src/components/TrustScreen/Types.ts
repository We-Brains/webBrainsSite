import { IPartners } from '../MainPagePartners/Types'

export interface ITrustScreenQuery {
  strapiTrustScreen: { title: string; subtitile: string; text: string; partners: IPartners[] }
}

export interface ITrustCarousel {
  partners: IPartners[]
}

export interface ITrustScreen {
  changeScreen: () => void
}
