'use client'
import Link from 'next/link'
import { headerPages } from '@/data'
import { Icons, GenericSearchInput } from '@/components'

export function Header() {
  return (
    <header className="relative w-full flex flex-col">
      <div className="relative w-full border-b-[1px] border-b-gray-300 py-5">
        <div className="container flex items-center justify-between">
          <Link href="/" className="mr-12">
            <Icons.logo />
          </Link>
          <GenericSearchInput />
          <div className="flex items-end gap-6">
            {headerPages.map(({ id, title, link, Icon }) => (
              <Link
                href={link}
                key={id}
                className="flex flex-col items-center gap-2"
              >
                <Icon />
                <span className="text-xs font-normal text-center text-gray-500">
                  {title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
