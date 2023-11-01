import { Button, Select } from '@/components'
import { IGenericSearchInput } from '../__types__'

export function GenericSearchInput({
  filterOptions,
  type = 'text',
  placeholder = 'Search',
}: IGenericSearchInput) {
  return (
    <div className="relative flex flex-grow h-10 border-2 border-blue-500 rounded-md mr-20">
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
