import { FC } from 'react';

const Search: FC<{ value: string; setValue: (e: string) => void }> = ({ value, setValue }) => {
  return (
    <div className="flex pt-6">
      <span className="text-sm border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap dark:bg-gray-700 dark:text-white">Search </span>
      <input value={value} onChange={(e) => setValue(e.target.value)} name="field_name" className="border-2 rounded-r px-4 py-2 w-full outline-none dark:bg-gray-600 dark:text-white" type="text" placeholder="Write something here..." />
    </div>
  );
};

export default Search;
