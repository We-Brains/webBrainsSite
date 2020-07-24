export interface IAboutScreenQuery {
  strapiAboutUsScreen: {
    title: string
    subtitle: string
    text: string
    svg: string
    infotext: string
    yellowAchivement: IAchivment
    achivements: IAchivment[]
  }
}

export interface IAchivment {
  number: string
  title: string
}
