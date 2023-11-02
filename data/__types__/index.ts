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
