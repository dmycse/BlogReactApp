import { Link } from "react-router-dom";

export const Postcrubms = ({author, category, date, visits}) => {
  
  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      {author && <Link to={`/posts?author=${author}`} className="text-purple-500">{author}</Link>}
      {author && <span>on</span>}
      <Link to={`/posts?category=${category}`} className="text-purple-500">{category}</Link>
      {date && <span>{date}</span>}
      {visits && (
        <span className="ml-1 flex items-center gap-2">
          <img src="/src/s-shared/assets/svg/eyes_looking.svg" alt="eye" width={25} />
          {visits}
        </span>
      )}
    </div>
  )
};
