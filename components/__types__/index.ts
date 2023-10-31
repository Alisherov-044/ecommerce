import { ReactNode } from 'react'

export interface IGenericSearchInput {
  type?: string
  placeholder?: string
  filterOptions?: object[]
}

export interface IButton {
  children: ReactNode
  className?: string
  variant?: 'primary'
  type?: 'button' | 'submit' | 'reset' | undefined
}
