import { Link } from "react-router-dom";
import { PostActions } from "@/e-entities/post";
import { SearchInput } from "@/s-shared/ui/searchInput/SearchInput";
import { categories, noAvatarPlaceholderImage } from "@/s-shared/constants";

export const PostDetails = ({ post }) => {
  return (
    <aside className="px-4 max-w-72 h-max sticky top-4">
      <h2 className="mb-4 text-sm font-medium">Author</h2>
      <div className="mb-2 flex items-center gap-4">
        <img 
          src={post.user?.img || noAvatarPlaceholderImage} 
          alt="user"
          width={28}
          height={28} 
          className="w-7 h-7 rounded-full object-cover" 
        />
        <Link to="/" className="text-purple-900">{post.user?.username}</Link>
      </div>
      <p className="mb-2 text-gray-500 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, saepe?
      </p>
      <div className="flex gap-2">
        <Link to=''><img src="/svg/facebook.svg" alt="facebook" width={24} /></Link>
        <Link to=''><img src="/svg/instagram.svg" alt="facebook" width={24} /></Link>
      </div>
      <PostActions post={post} />
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
    </aside>
  )
}
