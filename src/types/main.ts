export interface inhabitantCardType {
  id: number
  name: string
  src: any
  description: string
}

export interface iconsCard {
  id: number
  text: string
  src: any
  alt: string
  hr: boolean
}

export interface priceList {
  id: number
  type: string
  price: number
}

export interface RouteApi {
  link?: string
  name?: string
}

export interface About {
  title: string
  description: string
  src: string
  alt: string
  className?: string
}

export interface Modal {
  display: boolean
  props?: object
}
