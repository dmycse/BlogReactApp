import { Link } from "react-router-dom";
import { PostActions } from "@/entities/post";
import { SearchInput } from "@/shared/ui-elements/searchInput/SearchInput";
import { categories } from "@/shared/constants";

export const PostDetails = () => {
  return (
    <div className="px-4 h-max sticky top-4">
      <h2 className="mb-4 text-sm font-medium">Author</h2>
      <div className="mb-2 flex items-center gap-6">
        <img 
          src="/userImg.jpeg" 
          alt="user"
          width={48}
          height={48} 
          className="w-12 h-12 rounded-full object-cover" 
        />
        <Link to="/" className="text-purple-900">John Doe</Link>
      </div>
      <p className="mb-2 text-gray-500 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, saepe?
      </p>
      <div className="flex gap-2">
        <Link to=''><img src="/facebook.svg" alt="facebook" width={24} /></Link>
        <Link to=''><img src="/instagram.svg" alt="facebook" width={24} /></Link>
      </div>
      <PostActions />
      <h2 className="mt-4 mb-2 text-sm font-medium">Categories</h2>
      <nav className="flex flex-col gap-2 text-sm">
        {categories.map(item => (
          <Link 
            key={item.id} 
            to={item.url}
            className="text-sm text-blue-800 underline"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <h2 className="mt-4 mb-2 text-sm font-medium">Search</h2>
      <SearchInput />
    </div>
  )
}
