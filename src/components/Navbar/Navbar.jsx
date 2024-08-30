
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import Logo from '../../assets/Website/Logo.png';
import { IoMdSearch } from "react-icons/io";
import DarkMode from '../../components/Navbar/DarkMode';

const menuItems = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Menu', link: '/menu' },
  { id: 3, name: 'About', link: '/about' },
  { id: 4, name: 'Contact', link: '/contact' },
];

const Navbar = () => {
  return (
    <div className='relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white'>
      { /* upper navbar */ }
      <div className='py-3 bg-primary/40'>
        <div className='container flex items-center justify-between'>
          <div>
            <Link to="/" className='gap-2 text-2xl font-bold md:flex sm:text-3xl '>
              <img src={Logo} alt="logo" className='w-[75px] h-[30px] md:w-[150px] md:h-[60px] uppercase'/>
              <span className='text-4xl text-secondary md:text-5xl lg:text-6xl'>Resto.</span>
            </Link>
          </div>
          { /* search bar */ }
          <div className='flex items-center justify-between gap-4'>
            <div className='relative hidden group sm:block'>
              <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800' />
              <IoMdSearch className='absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3' />
            </div>
            { /* order button */ }
            <button onClick={() => alert('Ordering not available yet')}
              className='flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group'>
              <span className='hidden transition-all duration-200 group-hover:block'>Order</span>
              <FaCartShopping className='text-xl text-white cursor-pointer drop-shadow-sm'/>
            </button>
            { /* Darkmode */}
            <DarkMode />
          </div>
        </div>
      </div>
      { /* lower navbar */ }
      <div className='flex justify-center'>
        <ul className='flex items-center gap-0 py-2'>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link className='inline-block px-4 duration-200 hover:text-primary' to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
