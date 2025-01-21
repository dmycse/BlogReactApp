import { Link } from "react-router-dom";
import { Postcrubms } from "@/c-widgets/postcrumbs/Postcrumbs";
import { CustomImage } from "@/s-shared/ui/customImage";

export const PostItem = ({ post }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex-1 min-h-56">
        {post.img && (
          <CustomImage 
            src={post.img}
            alt="post image" 
            //width={350} 
            // height={300}
            className="w-full h-56 rounded-xl object-cover"
          />)
        }
      </div>
      <div className="mb-1 sm:mb-6 min-h-2 sm:h-14 max-sm:text-lg text-xl cursor-pointer">
        <Link 
          to={`/posts/${post.slug}`}
          className="font-semibold">
          {post.title}
        </Link>
      </div>
      <Postcrubms 
        author={post.user.username} 
        category={post.category} 
        time={new Date(post.createdAt).toLocaleDateString()} 
      />
      <div className="pb-2 flex-1 flex flex-col gap-2">
        <p className="flex-1">
          {post.description}
        </p>
        <Link to={`/posts/${post.slug}`} className="text-sm text-blue-800 underline">
          Read more
        </Link>
      </div>
  </div>
  )
}
