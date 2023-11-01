import { FC, ComponentProps } from 'react'

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
