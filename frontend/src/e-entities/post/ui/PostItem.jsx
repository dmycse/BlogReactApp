import { Link } from "react-router-dom";
import { Postcrubms } from "@/c-widgets/postcrumbs/Postcrumbs";
import { CustomImage } from "@/s-shared/ui/customImage";

export const PostItem = ({ post }) => {
  return (
    <div className="mb-12 flex flex-col md:flex-row gap-6">
      <div className="sm:hidden md:block xl:w-1/3">
        {post.img && (
          <CustomImage 
            src={post.img}
            alt="post image" 
            width={400} 
            height={300} 
            className="h-full rounded-xl object-cover"
          />)
        }
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link 
          to={`/posts/${post.slug}`}
          className="text-2xl font-semibold">
          {post.title}
        </Link>
        <Postcrubms 
          author={post.user.username} 
          category={post.category} 
          time={new Date(post.createdAt).toLocaleDateString()} 
        />
        <p className="">
          {post.description}
        </p>
        <Link to={`/posts/${post.slug}`} className="text-sm text-blue-800 underline">
          Read more
        </Link>
      </div>
  </div>
  )
}
