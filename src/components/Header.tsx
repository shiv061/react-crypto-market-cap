import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html') as HTMLElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="h-16 flex justify-between items-center shadow-md fixed top-0 w-full bg-white dark:bg-gray-900 animate_colors">
      <Link to="/" className="p-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 px-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
        <h1 className="font-extrabold text-2xl dark:text-white">CoinMarketCap</h1>
      </Link>
      <span className="flex items-center justify-center">
        <span className="hover:border-blue-500">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-1 rounded-md cursor-pointer hover:bg-gray-800 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsDark(false)}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer hover:border-blue-500 p-1 rounded-md hover:bg-gray-100" viewBox="0 0 20 20" fill="currentColor" onClick={() => setIsDark(true)}>
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </span>
        <span>
          <Link to="/">
            <button className="bg-blue-600 text-white btn">Cryptocurrencies</button>
          </Link>
        </span>
        <span>
          <Link to="/exchanges">
            <button className="bg-blue-900 text-white btn">Exchanges</button>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Header;
