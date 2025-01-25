import { useUser } from '@clerk/clerk-react';
import DOMPurify from 'dompurify';
import { DeleteButton } from "@/s-shared/ui/deleteButton/DeleteButton";
import { useRemoveComment } from '../lib/useRemoveComment';


export const CommentItem = ({ postId, _id, user, description, createdAt }) => {

  const { user: authUser } = useUser();
  const role = authUser?.publicMetadata?.role;

  const { removeComment, isRemovingComment, commentRemovingError} = useRemoveComment(postId, _id);  

  const cleanDescription = DOMPurify.sanitize(description);

  return (
    <div key={_id} className="p-4 bg-slate-50 rounded-xl">
      <div className="w-[30%] grid grid-cols-[repeat(4,minmax(40px,1fr))] justify-items-center items-center gap-6">
        <div className='w-6'>
          {user?.img && (
            <img 
              src={user.img} 
              alt="user image"
              className="w-6 h-6 rounded-full object-cover" 
            />
          )}
        </div>
        <span className="font-medium">{user?.username}</span>
        <span className="w-16 text-sm text-gray-500">
          {createdAt && new Date(createdAt).toLocaleDateString()}
        </span>
        {authUser && (user.username === authUser.username || role === 'admin') && (
          <DeleteButton 
            width={15}
            height={15}
            disabled={isRemovingComment}  
            onDeleteSubmit={() => removeComment()}
          />
        )}
        {commentRemovingError && (
          <span className="text-red-500">{commentRemovingError.message}</span>
        )}
      </div>
      <div className="mt-4">
        <p>{cleanDescription}</p>
      </div>
    </div>
  )
}
