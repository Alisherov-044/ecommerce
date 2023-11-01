import { ReactNode } from 'react'

export interface IOption {
  [key: string]: string
}

export interface IGenericSearchInput {
  type?: string
  placeholder?: string
  filterOptions?: IOption[]
}

export interface IButton {
  children: ReactNode
  className?: string
  variant?: 'primary'
  type?: 'button' | 'submit' | 'reset' | undefined
}

export interface ISelect {
  options: IOption[]
  className?: string
  variant?: 'primary'
  defaultValue?: IOption
  fieldNames?: {
    title: string
    value: string
  }
}
