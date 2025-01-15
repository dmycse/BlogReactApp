import { Link } from "react-router-dom";
import { Postcrubms } from "@/widgets/postcrumbs/Postcrumbs";
import { CustomImage } from "@/shared/ui/customImage";

export const PostItem = ({ item }) => {
  return (
    <div className="mb-12 flex flex-col xl:flex-row gap-6">
      <div className="md:hidden xl:block xl:w-1/3">
        <CustomImage 
          src="postImg.jpeg"
          alt="post image" 
          // width={450} 
          // height={450} 
          className="h-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link 
          to="/test" 
          className="text-2xl font-semibold">
          {item.title}
        </Link>
        <Postcrubms author={item.author} category={item.category} time={item.time} />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi necessitatibus iste nulla distinctio,
           beatae temporibus quaerat vel voluptate rerum, voluptates repellat facere optio doloremque. 
           Blanditiis odit, esse reiciendis praesentium dicta a cupiditate libero natus commodi earum ex eum. Eius, odit.
        </p>
        <Link to='/test' className="text-sm text-blue-800 underline">
          Read more
        </Link>
      </div>
  </div>
  )
}
