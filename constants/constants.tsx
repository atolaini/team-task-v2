import { List, Users, Edit } from 'react-feather';

export const menuItems = [
  {
    label: 'My Tasks',
    href: '/overview',
    icon: <List />,
  },
  {
    label: 'Team',
    href: '/team',
    icon: <Users />,
  },
  {
    label: 'Add Tasks',
    href: '/add-tasks',
    icon: <Edit />,
  },
];
