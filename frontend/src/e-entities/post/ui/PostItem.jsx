import { Link } from "react-router-dom";
import { Postcrubms } from "@/c-widgets/postcrumbs/Postcrumbs";
import { CustomImage } from "@/s-shared/ui/customImage";

export const PostItem = ({ post }) => {
  return (
    <div className="mb-12 flex flex-col xl:flex-row gap-6">
      <div className="md:hidden xl:block xl:w-1/3">
        {post.img && (
          <CustomImage 
            src={post.img}
            alt="post image" 
            // width={450} 
            // height={450} 
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
        <Postcrubms author={post.author} category={post.category} time={post.updatedAt} />
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
