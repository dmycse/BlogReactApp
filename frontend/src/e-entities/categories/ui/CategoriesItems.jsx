import { Link } from 'react-router-dom';
import { categories } from '@/s-shared/constants';

export const CategoriesItems = () => {
  return (
    <ul className="flex-1 flex items-center justify-between flex-wrap gap-2">
      {categories.map(item => (
        <li 
          key={item.id} 
          className='py-2 first:bg-purple-500 first:text-white text-black rounded-lg
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