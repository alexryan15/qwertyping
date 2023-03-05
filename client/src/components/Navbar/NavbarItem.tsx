import React, { ReactElement } from 'react';

interface NavbarItemProps {
  href: string;
  icon: ReactElement;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, icon }) => {
  return (
    <a className='m-2 p-2 text-xl opacity-50 hover:transform hover:scale-125 hover:opacity-100 transition-all duration-300' href={href}>
      {icon}
    </a>
  );
};

export default NavbarItem;
