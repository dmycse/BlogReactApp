import { Link } from "react-router-dom";

export const Postcrubms = ({author, category, date}) => {
  
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <span>Written by</span>
      <Link to='' className="text-purple-500">{author}</Link>
      <span>on</span>
      <Link to={`/posts?category=${category}`} className="text-purple-500">{category}</Link>
      <span>{date}</span>
    </div>
  )
};
