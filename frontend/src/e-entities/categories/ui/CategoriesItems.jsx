import { Link } from 'react-router-dom';
import { categories } from '@/s-shared/constants';

export const CategoriesItems = () => {
  return (
    <ul className="flex-1 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-y-3">
      {categories.map(item => (
        <li 
          key={item.id} 
          className='py-2 m-auto first:bg-purple-500 first:text-white text-black rounded-lg
                    hover:bg-purple-300 hover:text-white cursor-pointer'
        >
          <Link to={item.url} className='px-4'>
            {item.id === 1 ? 'All Posts' : item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
};