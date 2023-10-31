import { clsx } from 'clsx'
import { IButton } from '../__types__'

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
}: IButton) {
  return (
    <button type={type} className={clsx(['button', variant, className])}>
      {children}
    </button>
  )
}
