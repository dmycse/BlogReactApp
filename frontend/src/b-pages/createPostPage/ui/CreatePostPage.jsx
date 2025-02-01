import { Link, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { CreatePostForm } from "@/d-features/createPost";

export const CreatePostPage = () => {
  const { isSignedIn } = useUser()
  const location = useLocation();
 
  if (!isSignedIn) {
    return (
      <div className="inline-flex gap-2">
        <span className="text-red-400">To create a post, you must be logged in: </span>
        <Link to="/login" state={{ from: location.pathname }} className="text-blue-600">Login</Link>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <CreatePostForm />
    </div>
  )
}
