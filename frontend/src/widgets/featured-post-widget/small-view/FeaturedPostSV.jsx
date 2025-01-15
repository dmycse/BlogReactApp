import { Link } from "react-router-dom"

export const FeaturedPostSV = ({ post }) => {
  return (
    <div className="lg:h-1/3 flex justify-between gap-4">
      <div className="w-1/3 aspect-video">
        <img 
          loading="lazy" 
          src={post.imageUrl} 
          alt="image"
          className="w-full h-full rounded-xl object-cover "
          width={298}
        />
      </div>
      <div className="w-2/3 flex flex-col gap-4">
        <div className="mb-2 flex items-center gap-4 text-sm lg:text-base">
          <h1 className="font-semibold">0{post.id}.</h1>
          <Link to="/test" className="lg:text-lg text-purple-500">{post.category}</Link>
          <span className="text-gray-500 text:sm">2 days ago</span>
        </div>
        <Link 
          to="/test" 
          className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
          {post.title}
        </Link>
      </div>
    </div>
  );
};
