import { FC, ComponentProps, ReactNode } from 'react'

interface IPage {
  id: number
  title: string
  link: string
  Icon: FC<ComponentProps<'svg'>>
}

export interface IHeaderPage extends IPage {}

export interface ISidebarPages {
  main: IPage[]
  additional: IPage[]
  privacy: Omit<IPage, 'Icon'>[]
}

export interface ICategory {
  id: number
  title: string
  link: string
  thumb?: string
  description?: ReactNode
  discount?: number
}

export interface ICurrency {
  id: number
  title: string
  value: string
}

export interface ICountry {
  id: number
  name: string
  flag: ReactNode
}

export interface IProductImage {
  id: number
  src: string
  isDefault?: boolean
}

export interface IProduct {
  id: number
  slug: string
  name: string
  category: string
  price: number
  discount?: number
  description?: string
  images: IProductImage[]
}
