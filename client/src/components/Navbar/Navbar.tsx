import { BsPersonCircle } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/Io';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-8 my-4 p-2 text-4xl '>
        <a href="/">qwertyping</a>
        <div className='flex items-center'>
        <NavbarItem href="/" icon={<IoMdSettings />} />
        <NavbarItem href="/" icon={<BsPersonCircle />} />
        </div>
    </div>
  );
};

export default Navbar;





