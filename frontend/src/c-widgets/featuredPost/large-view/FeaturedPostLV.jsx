import { Link } from "react-router-dom";
import { CustomImage } from "@/s-shared/ui/customImage";
import { Postcrubms } from "@/c-widgets/postcrumbs/Postcrumbs";

export const FeaturedPostLV = ( { post, number }) => {

  return (
    <>
      {post.img && (
        <div className="h-72 lg:flex-1 aspect-video">
          <CustomImage 
            src={post.img}
            alt="post image" 
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        )
      }
      <div className="flex items-center gap-2">
        <h1 className="font-semibold max-sm:text-sm text-base lg:text-lg text-purple-800">0{number}</h1>
        <Postcrubms 
          slug={post.slug}  
          category={post.category} 
          date={new Date(post.createdAt).toLocaleDateString()}
        />
      </div>
      <Link 
        to={`/posts/${post.slug}`} 
        className="text-xl lg:text-3xl font-semibold lg:font-bold">
        {post.title}
      </Link>
    </>
  )
}
