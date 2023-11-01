'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { ISidebar } from '../__types__'
import { Backdrop, Icons } from '@/components'
import { sidebarPages } from '../../data'

export function Sidebar({ isOpen, close }: ISidebar) {
  return (
    <Backdrop active={isOpen} onClose={close}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx([
          'absolute -translate-x-full flex flex-col w-[280px] h-full bg-white transition-all duration-300',
          isOpen && 'translate-x-0',
        ])}
      >
        <div className="relative flex flex-col gap-[10px] bg-gray-100 w-full h-28 p-5">
          <Icons.close
            onClick={close}
            className="absolute top-[10px] right-[10px] cursor-pointer"
          />

          <Icons.avatar />

          <Link href="#" className="font-normal">
            Sign in | Register
          </Link>
        </div>

        <div className="flex flex-col gap-[10px] p-[10px]">
          <div className="flex flex-col border-b-[1px] border-gray-200 last-of-type:border-b-0">
            {sidebarPages.main.map(({ id, title, link, Icon }) => (
              <Link href={link} key={id} className="flex gap-4 p-3">
                <Icon />
                <span className="font-normal text-black">{title}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 last-of-type:border-b-0">
            {sidebarPages.additional.map(({ id, title, link, Icon }) => (
              <Link href={link} key={id} className="flex gap-4 p-3">
                <Icon />
                <span className="font-normal text-black">{title}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col border-b-[1px] border-gray-200 last-of-type:border-b-0">
            {sidebarPages.privacy.map(({ id, title, link }) => (
              <Link href={link} key={id} className="flex gap-4 p-3">
                <span className="font-normal text-black">{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Backdrop>
  )
}
