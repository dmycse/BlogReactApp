import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PostsList } from "@/c-widgets/postsList/ui/PostsList";
import { SideMenu } from "@/c-widgets/sidemenu";

export const PostsListPage = () => {

  let [searchParams] = useSearchParams();
  let category = searchParams.get('category');

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-8 text-2xl text-purple-500">{category} Blog</h1>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="px-4 py-2 mb-4 md:hidden rounded-xl bg-purple-800 text-sm text-white"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="xl:w-full flex flex-col-reverse gap-10 md:flex-row justify-between">
        <PostsList searchParams={searchParams}/>
        <div className={` ${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
