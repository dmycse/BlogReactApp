import { Link } from "react-router-dom";
import { CustomImage } from "@/s-shared/ui/customImage";
import { Postcrubms } from "@/c-widgets/postcrumbs/Postcrumbs";

export const FeaturedPostsSV = ({ post, number }) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="w-1/3 aspect-video">
        {post.img &&
          <CustomImage 
            src={post.img}
            alt="post image"  
            className="w-full h-full rounded-xl object-cover"
          />
        }
      </div>
      <div className="w-2/3 flex flex-col gap-1">
        <div className="mb-2 flex items-center gap-2 text-sm lg:text-base">
          <h1 className="font-semibold max-sm:text-sm text-base lg:text-lg text-purple-800">0{number}</h1>
          <Postcrubms 
            slug={post.slug}  
            category={post.category}
            date={new Date(post.createdAt).toLocaleDateString()} 
          />
        </div>
        <div className="mb-1 sm:mb-6 min-h-2 sm:h-fit md:h-14 max-sm:text-lg text-xl cursor-pointer">
          <Link 
            to={`/posts/${post.slug}`}
            className="font-semibold">
            {post.title}
          </Link>
        </div>
      </div>
    </div>
  );
};
