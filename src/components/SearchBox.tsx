import { FC } from 'react';

interface IProps {
  search: string;
  setSearch: (search: string) => void;
}

export const SearchBox: FC<IProps> = ({ search, setSearch }) => {
  return (
    <div className="flex px-4 py-2">
      <span className="text-sm border rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap dark:bg-gray-900 dark:text-white">Search:</span>
      <input value={search} onChange={(e) => setSearch(e.target.value)} name="field_name" className="outline-none dark:bg-gray-800 dark:text-white border rounded-r px-4 py-2 w-full" type="text" placeholder="Search for you fav coin..." />
    </div>
  );
};
