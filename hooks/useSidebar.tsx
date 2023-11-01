'use client'
import { useState } from 'react'

export function useSidebar() {
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

  return { isOpen, open, close, toggle }
}
