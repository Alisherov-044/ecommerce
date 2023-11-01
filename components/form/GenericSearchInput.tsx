import clsx from 'clsx'
import { Button, Select } from '@/components'
import { IGenericSearchInput } from '../__types__'

export function GenericSearchInput({
  filterOptions,
  className,
  type = 'text',
  placeholder = 'Search',
}: IGenericSearchInput) {
  return (
    <div
      className={clsx([
        'relative flex flex-grow max-w-[665px] h-10 border-2 border-blue-500 rounded-md',
        className,
      ])}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="flex-grow p-[10px]"
      />
      {filterOptions ? (
        <Select options={filterOptions} className="h-full border-y-0" />
      ) : null}
      <Button className="h-full rounded-none">Search</Button>
    </div>
  )
}
