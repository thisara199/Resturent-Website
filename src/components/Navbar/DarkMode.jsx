import  { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons for dark and light mode

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 transition duration-300 bg-gray-200 rounded-full focus:outline-none dark:bg-gray-800'
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <FaMoon className="text-xl text-gray-800 dark:text-gray-200" />
      ) : (
        <FaSun className="text-xl text-yellow-400" />
      )}
    </button>
  );
};

export default DarkMode;
