import { Icons } from '@/components'
import { IHeaderPage } from './__types__'

export const headerPages: IHeaderPage[] = [
  {
    id: 1,
    title: 'Profile',
    link: '#',
    Icon: Icons.user,
  },
  {
    id: 2,
    title: 'Message',
    link: '#',
    Icon: Icons.message,
  },
  {
    id: 3,
    title: 'Orders',
    link: '#',
    Icon: Icons.heart,
  },
  {
    id: 4,
    title: 'My cart',
    link: '#',
    Icon: Icons.cart,
  },
]
