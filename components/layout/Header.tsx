'use client'
import Link from 'next/link'
import { Icons, GenericSearchInput } from '@/components'

export function Header() {
  return (
    <header className="relative w-full flex flex-col">
      <div className="relative w-full border-b-[1px] border-b-gray-300 py-5">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Icons.logo />
          </Link>
          <GenericSearchInput />
        </div>
      </div>
    </header>
  )
}
