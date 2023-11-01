'use client'
import clsx from 'clsx'
import { useSelect } from '@/hooks'
import { Icons } from '@/components'
import { IOption, ISelect } from '../__types__'

export function Select({
  options,
  className,
  defaultValue,
  variant = 'primary',
  fieldNames = { title: 'title', value: 'value' },
}: ISelect) {
  const { selected, setSelected, isOpen, close, toggle } = useSelect<IOption>(
    defaultValue ?? options[0]
  )

  return (
    <div
      onClick={toggle}
      className={clsx([
        'select flex-shrink-0 cursor-pointer',
        variant,
        className,
      ])}
    >
      <span className="text-black font-normal select-none">
        {selected[fieldNames.title]}
      </span>
      <Icons.selectArrow />
      <div
        className={clsx([
          'absolute border-inherit w-[calc(100%+4px)] left-0 bottom-0 translate-y-full -translate-x-[2px] transition-opacity',
          !isOpen && 'opacity-0 pointer-events-none -z-50',
        ])}
      >
        {options
          .filter((option) => option !== selected)
          .map((option, index) => (
            <div
              key={index}
              onClick={async () => {
                await setSelected(option)
                close()
              }}
              className="select-none border-2 border-b-0 border-inherit p-[10px] cursor-pointer bg-white last-of-type:border-b-2"
            >
              {option[fieldNames.title]}
            </div>
          ))}
      </div>
    </div>
  )
}
