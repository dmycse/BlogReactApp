import { categories, filterItems } from "../../constants/constants";
import { Search } from "../../search";

export const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        {filterItems.map(item => (
          <label key={item.id} htmlFor="" className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id=""
              name="sort"
              // onChange={handleFilterChange}
              value={item.value}
              className="appearance-none w-4 h-4 border-[1.5px] border-purple-800 cursor-pointer rounded-sm bg-white checked:bg-purple-800"
            />
              {item.name}
          </label>
          ))
        }
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        {categories.map(category => (
          <span 
            key={category.id}
            // onClick={() => handleCategoryChange(category.selector)}
            className="underline cursor-pointer hover:text-purple-700" 
          >
            {category.selector === 'general' ? 'All' : category.title}
          </span>
        ))}
      </div>
    </div>
  )
}
