import clsx from 'clsx'
import { IBackdrop } from '../__types__'

export function Backdrop({ onClose, active, children, className }: IBackdrop) {
  return (
    <div
      className={clsx([
        'backdrop fixed top-0 left-0 w-screen h-screen z-50 transition-all',
        !active && 'opacity-0 pointer-events-none -z-50',
        className,
      ])}
      onClick={onClose}
    >
      {children}
    </div>
  )
}
