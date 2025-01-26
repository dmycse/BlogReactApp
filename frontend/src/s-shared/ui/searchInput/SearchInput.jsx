import { useSearchInput } from '@/s-shared/lib/useSearchInput';
import { Search as SearchIcon } from 'lucide-react';

export const SearchInput = () => {

  const { inputRef, handleKeyDown } = useSearchInput();

  return (
    <div className="p-2 flex items-center gap-2 bg-gray-100 rounded-lg">
      <SearchIcon className='text-gray-400' />
      <input 
        type="text" 
        placeholder="search a post ..." 
        className="outline-none bg-transparent"
        ref={inputRef}
        onKeyDown={handleKeyDown} 
      />
    </div>
  )
}
