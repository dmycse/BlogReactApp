import { useState } from "react";
import { PostsList } from "@/shared/ui/postsList/PostsList";
import { SideMenu } from "@/widgets/sidemenu";

export const PostsListPage = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-8 text-2xl text-purple-500">Development Blog</h1>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="px-4 py-2 mb-4 md:hidden rounded-xl bg-purple-800 text-sm text-white"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="xl:w-full flex flex-col-reverse gap-10 md:flex-row justify-between">
        <PostsList />
        <div className={` ${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
