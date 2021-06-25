import { useDark } from '../hooks';

export const Header = () => {
  const { dark, setDark } = useDark();
  const bigScreen = (
    <>
      {!dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1 hover:bg-gray-100 mr-2 rounded-md cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => setDark(true)}>
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 p-1 hover:bg-gray-800 mr-2 rounded-md cursor-pointer text-white" viewBox="0 0 20 20" fill="currentColor" onClick={() => setDark(false)}>
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
      <button className="btn bg-blue-400 dark:text-white">Coins</button>
      <button className="btn bg-indigo-400 dark:text-white">Exchanges</button>
    </>
  );

  return (
    <div className="h-16 w-full fixed top-0 bg-white dark:bg-gray-900 shadow-sm animate-color z-10">
      <div className="flex items-center h-full w-full justify-between px-4">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900 dark:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          <h1 className="text-2xl font-semibold dark:text-white">ReactMarketCap</h1>
        </span>
        <span className="flex items-center">{bigScreen}</span>
      </div>
    </div>
  );
};
