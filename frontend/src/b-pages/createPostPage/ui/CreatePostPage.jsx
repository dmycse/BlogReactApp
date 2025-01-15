import { CreatePostForm } from "@/d-features/createPost";

export const CreatePostPage = () => {

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <CreatePostForm />
    </div>
  )
}
