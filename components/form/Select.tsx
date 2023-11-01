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
          !isOpen && 'opacity-0',
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
              className="option select-none border-2 border-inherit p-[10px] cursor-pointer"
            >
              {option[fieldNames.title]}
            </div>
          ))}
      </div>
    </div>
  )
}
