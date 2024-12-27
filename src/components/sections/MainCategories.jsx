import {Link } from 'react-router-dom';
import { categories } from '../../constants/constants';
import { Search } from 'lucide-react';

export const MainCategories = () => {
  return (
    <section className='p-4 shadow-lg hidden md:flex items-center justify-center gap-8 bg-white rounded-lg'>
      <ul className="flex-1 flex items-center justify-between flex-wrap gap-2">
        {categories.map(item => (
          <li 
            key={item.id} 
            className='py-2 first:bg-purple-500 first:text-white text-black rounded-lg
                       hover:bg-purple-300 hover:text-white cursor-pointer'
          >
            <Link 
              to={item.url}
              className='px-4'>
            {item.id === 1 ? 'All Posts' : item.title}
          </Link>
          </li>
        ))}
      </ul>
      <span className='text-xl font-medium'>|</span>
      <div className="p-2 flex items-center gap-2 bg-gray-100 rounded-lg">
        <Search className='text-gray-400'/>
        <input 
          type="text" 
          placeholder="search a post ..." 
          className="outline-none bg-transparent" 
        />
      </div>
    </section>
  )
}
