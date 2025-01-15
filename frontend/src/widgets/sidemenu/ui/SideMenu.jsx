import { categories, filterItems } from "@/shared/constants";
import { SearchInput } from "@/shared/ui/searchInput/SearchInput";

export const SideMenu = () => {
  return (
    <aside className="px-2 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-semibold">Search</h1>
      <SearchInput />
      <h1 className="mt-8 mb-4 text-sm font-semibold">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        {filterItems.map(item => (
          <label key={item.id} htmlFor={item.value} className="flex items-center gap-2 cursor-pointer hover:text-purple-700">
            <input
              type="radio"
              id={item.value}
              name="sort"
              // onChange={handleFilterChange}
              value={item.value}
              className="appearance-none w-4 h-4 border-[1.5px] border-purple-800 cursor-pointer rounded-md bg-white checked:bg-purple-800"
            />
              {item.name}
          </label>
          ))
        }
      </div>
      <h1 className="mt-8 mb-4 text-sm font-semibold">Categories</h1>
      <ul className="flex flex-col gap-2 text-sm">
        {categories.map(category => (
          <li 
            key={category.id}
            // onClick={() => handleCategoryChange(category.selector)}
            className="underline cursor-pointer hover:text-purple-700" 
          >
            {category.selector === 'general' ? 'All' : category.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
