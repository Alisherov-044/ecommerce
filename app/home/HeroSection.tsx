'use client'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Icons } from '@/components'
import { tabCategories } from '@/data'
import { useTabCategories } from '@/hooks'

export function HeroSection() {
  const { activeTab, onTabSelect } = useTabCategories()

  return (
    <section className="relative flex p-5 border-[1px] border-gray-300 rounded-md mt-5 tablet:flex-col tablet:gap-4 tablet:border-0 tablet:p-0 tablet:m-0">
      <div className="flex flex-col mr-3 tablet:hidden">
        {tabCategories.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => onTabSelect(id)}
            className={clsx([
              'p-[10px] rounded-md cursor-pointer w-[250px] text-start',
              activeTab.id === id
                ? 'bg-blue-100 text-black'
                : 'bg-transparent text-gray-600 transition-all hover:bg-blue-50 hover:text-black',
            ])}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="gap-1 hidden tablet:flex overflow-x-scroll no-scrollbar mt-4">
        {tabCategories.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => onTabSelect(id)}
            className="first-of-type:ml-5 last-of-type:mr-5 flex-shrink-0 p-[10px] rounded-md bg-gray-200 font-normal text-blue-600 cursor-pointer"
          >
            {title}
          </button>
        ))}
      </div>

      <div className="relative flex-grow max-w-[665px] min-h-full px-[45px] py-[56px] mr-4 tablet:px-[25px] tablet:py-[36px] tablet:max-w-full tablet:mr-0">
        <div className="flex flex-col gap-4">
          {activeTab.description}
          <Link
            href="#"
            className="flex items-center px-4 bg-white rounded-md font-medium w-fit h-10"
          >
            Learn more
          </Link>
        </div>

        <div className="absolute flex-grow flex-shrink-0 top-0 left-0 w-full h-full -z-10">
          <Image
            className="object-cover w-full h-full"
            src={activeTab.thumb!}
            width={665}
            height={390}
            alt={activeTab.title}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-[200px] tablet:hidden">
        <div className="flex flex-col px-3 py-4 bg-blue-100 rounded-md">
          <div className="flex gap-3 items-end mb-4">
            <Icons.avatar />
            <h4 className="font-normal">
              Hi, user <br /> let's get started
            </h4>
          </div>

          {[
            { text: 'Join now', link: '#' },
            { text: 'Log in', link: '#' },
          ].map(({ text, link }, index) => (
            <Link
              key={index}
              href={link}
              className={clsx([
                'h-[30px] flex items-center justify-center px-[10px] rounded-md text-sm mt-3',
                index === 0 && 'bg-blue-500 text-white',
                index === 1 && 'bg-white text-blue-500',
              ])}
            >
              {text}
            </Link>
          ))}
        </div>

        {[
          { text: 'Get US $10 off with a new supplier', link: '#' },
          { text: 'Send quotes with supplier preferences', link: '#' },
        ].map(({ text, link }, index) => (
          <div
            key={index}
            className={clsx([
              'p-4 rounded-md h-24',
              index === 0 && 'bg-[#F38332]',
              index === 1 && 'bg-[#55BDC3]',
            ])}
          >
            <Link href={link} className="text-white">
              {text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
