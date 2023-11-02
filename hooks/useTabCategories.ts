'use client'
import { tabCategories } from '@/data'
import { useEffect, useState } from 'react'
import { ICategory } from '@/data/__types__'

export function useTabCategories(defaultActiveTab?: number) {
  const [active, setActive] = useState<number>(defaultActiveTab ?? 1)
  const [activeTab, setActiveTab] = useState<ICategory>(
    tabCategories.find((x) => x.id === active)!
  )

  useEffect(() => {
    setActiveTab(tabCategories.find((x) => x.id === active)!)
  }, [active])

  function onTabSelect(id: number) {
    setActive(id)
  }

  return { activeTab, onTabSelect }
}
