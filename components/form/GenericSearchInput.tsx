import { Button } from '@/components'
import { IGenericSearchInput } from '../__types__'

export function GenericSearchInput({
  filterOptions,
  type = 'text',
  placeholder = 'Search',
}: IGenericSearchInput) {
  return (
    <div className="relative flex h-10 border-2 border-blue-500 rounded-md">
      <input
        type={type}
        placeholder={placeholder}
        className="max-w-[420px] w-full p-[10px]"
      />
      <Button className="h-full rounded-none">Search</Button>
    </div>
  )
}
