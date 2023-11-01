'use client'
import Link from 'next/link'
import { headerPages } from '@/data'
import { Icons, GenericSearchInput, Input } from '@/components'

const options = [
  {
    title: 'All category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
  {
    title: 'First category',
    value: '#',
  },
]

export function Header() {
  return (
    <header className="relative w-full flex flex-col">
      <div className="relative w-full border-b-[1px] border-b-gray-300 py-5">
        <div className="container flex items-center gap-6 justify-between py-[10px]">
          <div className="flex gap-4 items-center">
            <Icons.burger className="hidden mobile:block" />
            <Link href="/">
              <Icons.logo />
            </Link>
          </div>

          <GenericSearchInput
            filterOptions={options}
            className="tablet:hidden"
          />

          <div className="flex items-end gap-6 mobile:hidden">
            {headerPages.map(({ id, title, link, Icon }) => (
              <Link
                href={link}
                key={id}
                className="flex flex-col items-center gap-2"
              >
                <Icon fill="gray" />
                <span className="text-xs font-normal text-center text-gray-500">
                  {title}
                </span>
              </Link>
            ))}
          </div>

          <div className="items-center gap-5 hidden mobile:flex">
            {headerPages
              .filter((headerPage) =>
                ['Profile', 'My cart'].includes(headerPage.title)
              )
              .reverse()
              .map(({ id, link, Icon }) => (
                <Link href={link} key={id}>
                  <Icon width={24} height={24} fill="black" />
                </Link>
              ))}
          </div>
        </div>

        <div className="container flex-col hidden tablet:flex">
          <Input type="search" placeholder="Search" Icon={Icons.search} />
        </div>

        <div className="gap-1 hidden tablet:flex overflow-x-scroll no-scrollbar mt-4">
          {options.map(({ title }, index) => (
            <button
              key={index}
              className="first-of-type:ml-5 last-of-type:mr-5 flex-shrink-0 p-[10px] rounded-md bg-gray-200 font-normal text-blue-600 cursor-pointer"
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
