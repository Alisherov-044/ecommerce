'use client'
import Link from 'next/link'
import { useSidebar } from '@/hooks'
import { categories, countries, currency, headerPages } from '@/data'
import { Icons, GenericSearchInput, Input, Sidebar, Select } from '@/components'

export function Header() {
  const { isOpen, open, close } = useSidebar()

  return (
    <header className="relative w-full flex flex-col">
      <div className="relative w-full border-b-[1px] border-b-gray-300 tablet:border-b-0 py-5 tablet:py-2">
        <div className="container flex items-center gap-6 justify-between py-[10px]">
          <div className="flex gap-4 items-center">
            <Icons.burger className="hidden mobile:block" onClick={open} />

            <Link href="/">
              <Icons.logo />
            </Link>
          </div>

          <GenericSearchInput
            filterOptions={categories}
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

        <Sidebar isOpen={isOpen} close={close} />
      </div>

      <div className="relative w-full border-b-[1px] border-b-gray-300 py-4 tablet:hidden">
        <div className="container flex items-center justify-between">
          <div className="flex gap-6">
            <Link href="#" className="flex gap-[6px]">
              <Icons.burger />
              <span className="font-medium text-black">All categories</span>
            </Link>

            {categories.slice(0, 5).map(({ id, title, link }) => (
              <Link href={link} className="flex gap-[6px]" key={id}>
                <span className="font-medium text-black">{title}</span>
                {id === 5 && categories.length > 5 ? (
                  <Icons.selectArrow />
                ) : null}
              </Link>
            ))}
          </div>

          <div className="flex gap-8 items-center">
            <Select options={currency} variant="secondary" />

            <Select
              options={countries}
              suffix="Ship to"
              optionContacination="name"
              fieldNames={{ title: 'flag', value: 'flag' }}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
