import { useGetCoinsInfoQuery } from '../services/api';
import CoinList, { ICoinProps } from '../components/CoinList';
import Search from '../components/Search';
import { useState } from 'react';

const MainPage = () => {
  const { data, isLoading, error } = useGetCoinsInfoQuery('assets');
  const [search, setSearch] = useState('');

  if (isLoading) {
    return (
      <div className="center">
        <h1 className="dark:text-white font-extrabold text-8xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <h1>An Error has occurred</h1>;
  }

  const filterCoins = (d: ICoinProps) => d.name?.toLowerCase()?.includes(search?.toLowerCase()) || d.symbol?.toLowerCase()?.includes(search?.toLowerCase());

  return (
    <div className="px-4 mt-16 dark:bg-gray-800 animate_colors min-h-screen">
      <Search value={search} setValue={setSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.filter(filterCoins)?.map((d, index) => (
          <CoinList {...d} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
