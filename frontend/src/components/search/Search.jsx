import { Search as SearchIcon } from 'lucide-react';

export const Search = () => {
  return (
    <div className="p-2 flex items-center gap-2 rounded-xl bg-gray-100">
      <SearchIcon className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent outline-none"
      />
    </div>
  )
}
