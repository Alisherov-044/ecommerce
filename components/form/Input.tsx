import clsx from 'clsx'
import { IInput } from '../__types__'

export function Input({
  className,
  Icon,
  iconPosition,
  placeholder,
  type = 'text',
  variant = 'primary',
}: IInput) {
  return (
    <div className={clsx(['input', variant, className])}>
      {Icon ? (
        <Icon
          className={clsx([iconPosition === 'start' ? 'order-1' : 'order-2'])}
        />
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx([
          'flex-grow',
          iconPosition === 'end' ? 'order-1' : 'order-2',
        ])}
      />
    </div>
  )
}
