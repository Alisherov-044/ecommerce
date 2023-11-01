'use client'
import { useState } from 'react'

export function useSelect<T>(defaultValue: T) {
  const [selected, setSelected] = useState<T>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  function toggle() {
    setIsOpen((prev) => !prev)
  }

  return { selected, setSelected, isOpen, open, close, toggle }
}
