import React from 'react'

export const CommentItem = () => {
  return (
    <div className="mb-8 p-4 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        <img src='/userImg.jpeg' w="40" className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">
          2 days ago
        </span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          A ipsa quidem exercitationem esse temporibus voluptatem 
          officia veritatis dolores? Praesentium earum autem architecto, 
          tenetur maxime at reiciendis esse inventore quaerat dicta.
        </p>
      </div>
    </div>
  )
}
