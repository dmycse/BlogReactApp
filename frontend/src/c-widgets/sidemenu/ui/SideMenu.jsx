import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, filterItems } from "@/s-shared/constants";
import { SearchInput } from "@/s-shared/ui/searchInput/SearchInput";

export const SideMenu = () => {

  const inputForm = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    setSearchParams({...Object.fromEntries(searchParams), sort: e.target.value});
  };

  const handleFilterReset = () => {
    let query = new URLSearchParams(searchParams);
    inputForm.current.reset();
    query.delete('sort');
    setSearchParams(query);
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get('category') !== category) {
      setSearchParams({...Object.fromEntries(searchParams), category})
    }
  };

  return (
    <aside className="px-2 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-semibold">Search</h1>
      <SearchInput />
      <h1 className="mt-8 mb-4 flex items-center gap-8">
        <span className="text-sm font-semibold">Filter</span>
        <button 
          className="px-1 text-[0.7em] text-slate-200 rounded-md bg-slate-400 hover:bg-slate-500 disabled:bg-slate-300"
          disabled={!searchParams.get('sort')}
          onClick={handleFilterReset}
        >
          Clear
        </button>
      </h1>
      <form className="flex flex-col gap-2 text-sm" ref={inputForm}>
        {filterItems.map(item => (
          <label key={item.id} htmlFor={item.value} className="flex items-center gap-2 cursor-pointer hover:text-purple-700">
            <input
              type="radio"
              id={item.value}
              name="sort"
              onChange={handleFilterChange}
              value={item.value}
              className="appearance-none w-4 h-4 border-[1.5px] border-purple-800 cursor-pointer rounded-md bg-white checked:bg-purple-800"
            />
              {item.name}
          </label>
          ))
        }
      </form>
      <h1 className="mt-8 mb-4 text-sm font-semibold">Categories</h1>
      <ul className="flex flex-col gap-2 text-sm">
        {categories.map(category => (
          <li 
            key={category.id}
            onClick={() => handleCategoryChange(category.selector)}
            className="underline cursor-pointer hover:text-purple-700" 
          >
            {category.selector === 'general' ? 'All' : category.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
