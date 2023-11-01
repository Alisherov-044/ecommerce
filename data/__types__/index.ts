import { FC, ComponentProps } from 'react'

export interface IHeaderPage {
  id: number
  title: string
  link: string
  Icon: FC<ComponentProps<'svg'>>
}
