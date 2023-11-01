import { FC, ReactNode, ComponentProps } from 'react'

export interface IOption {
  [key: string]: string
}

export interface IGenericSearchInput {
  type?: string
  className?: string
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

export interface IInput {
  className?: string
  placeholder: string
  Icon?: FC<ComponentProps<'svg'>>
  iconPosition?: 'start' | 'end'
  type?: 'text' | 'search' | 'number' | 'checkbox'
  variant?: 'primary'
}

export interface IBackdrop {
  className?: string
  active: boolean
  onClose: () => void
  children: ReactNode
}

export interface ISidebar {
  isOpen: boolean
  close: () => void
}
