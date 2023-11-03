'use client'
import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data'
import { useTimer } from '@/hooks'

export function OffersSection() {
  const { day, hours, minutes, seconds, parse } = useTimer('11/7/2023 23:59:59')

  return (
    <section className="flex p-[3px] rounded-md border-[1px] border-gray-300 mt-[30px]">
      <div className="border-r-[1px]">
        <div className="p-5">
          <h4 className="text-lg text-black font-bold">Deals and offers</h4>
          <h4 className="text-lg text-gray-400">Hygiene equipments</h4>
          <div className="flex gap-[6px] mt-4">
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-gray-600 text-white rounded-md">
              <span>{parse(day)}</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-gray-600 text-white rounded-md">
              <span>{parse(hours)}</span>
              <span className="text-xs">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-gray-600 text-white rounded-md">
              <span>{parse(minutes)}</span>
              <span className="text-xs">Min</span>
            </div>
            <div className="flex flex-col items-center justify-center w-[45px] h-[50px] bg-gray-600 text-white rounded-md">
              <span>{parse(seconds)}</span>
              <span className="text-xs">Sec</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {categories
          .filter((category) => category.discount)
          .map(({ id, title, link, discount, thumb }) => (
            <Link
              key={id}
              href={link}
              className="border-r-[1px] border-gray-300 last-of-type:border-0"
            >
              <div className="flex flex-col items-center justify-end px-10 py-5">
                <Image
                  src={thumb!}
                  width={100}
                  height={120}
                  alt={title}
                  className="w-[100px] h-[120px] object-cover"
                />
                <span className="mt-3 text-black">{title}</span>
                <span className="w-fit mt-2 px-3 py-1 text-sm rounded-3xl bg-[#FFE3E3] text-red-500">
                  -{discount}%
                </span>
              </div>
            </Link>
          ))}
      </div>
    </section>
  )
}
