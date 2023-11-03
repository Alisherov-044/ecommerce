import Link from 'next/link'
import Image from 'next/image'
import { ICategoriesSection } from './__types__'

export function CategoriesSection({
  title,
  link,
  image,
  categories,
}: ICategoriesSection) {
  return (
    <section className="flex mt-6 border-[1px] border-gray-300 rounded-md overflow-hidden">
      <div className="relative w-[260px] h-[260px] flex flex-col gap-4 p-5">
        <h4 className="max-w-[130px] text-[20px] font-bold text-black">
          {title}
        </h4>
        <Link
          href={link}
          className="flex items-center text-center w-fit px-4 h-10 bg-white rounded-md"
        >
          Source now
        </Link>

        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src={image}
            width={250}
            height={250}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-wrap"></div>
    </section>
  )
}
