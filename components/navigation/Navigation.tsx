import Link from 'next/link';
import { menuItems } from '@/constants/constants';

const Navigation = () => {
  return (
    <ul className='flex flex-row justify-around w-full lg:flex-col lg:gap-8'>
      {menuItems.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className='flex flex-row gap-4 items-center'
          >
            <span>{item.icon}</span>
            <span className='hidden lg:block'>
              <p className='font-semibold text-[1.2rem]'>{item.label}</p>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
