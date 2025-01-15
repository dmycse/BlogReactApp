import { CommentItem } from "@/entities/comment";

export const Comments = () => {
  return (
    <div className="mb-12 lg:w-3/5 flex flex-col gap-6">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="w-full flex items-center justify-between gap-8">
        <textarea name="newcomment" id="newcomment" placeholder='Write a comment' className='p-3 w-full outline-none rounded-xl'/>
        <button className='px-4 py-2 bg-purple-500 text-white rounded-xl'>Send</button>
      </div>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  )
}
