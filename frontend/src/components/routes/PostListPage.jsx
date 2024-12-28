import { useState } from "react";
import { PostsList } from "../sections";
import { SideMenu } from "../sidemenu";

export const PostListPage = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl text-purple-800">Development Blog</h1>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="px-4 py-2 mb-4 md:hidden rounded-xl bg-purple-800 text-sm text-white"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div>
          <PostsList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
