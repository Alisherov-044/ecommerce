import { Icons } from '@/components'
import { ISidebarPages } from './__types__'

export const sidebarPages: ISidebarPages = {
  main: [
    {
      id: 1,
      title: 'Home',
      link: '#',
      Icon: Icons.home,
    },
    {
      id: 2,
      title: 'Categories',
      link: '#',
      Icon: Icons.category,
    },
    {
      id: 3,
      title: 'Favorites',
      link: '#',
      Icon: Icons.heartOutline,
    },
    {
      id: 4,
      title: 'My orders',
      link: '#',
      Icon: Icons.order,
    },
  ],
  additional: [
    {
      id: 1,
      title: 'English | USD',
      link: '#',
      Icon: Icons.globus,
    },
    {
      id: 2,
      title: 'Contact us',
      link: '#',
      Icon: Icons.contact,
    },
    {
      id: 3,
      title: 'About',
      link: '#',
      Icon: Icons.about,
    },
  ],
  privacy: [
    {
      id: 1,
      title: 'User agreement',
      link: '#',
    },
    {
      id: 2,
      title: 'Partnership',
      link: '#',
    },
    {
      id: 3,
      title: 'Privacy policy',
      link: '#',
    },
  ],
}
