import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useCreateComment } from '../lib/useCreateComment';
import DOMPurify from 'dompurify';

export const CreateComment = ({ postId }) => {

  const { user } = useUser();
  
  let { createNewComment, isPending, error } = useCreateComment(postId);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    
    const content = formData.get('content').trim();

    const newComment = {
      description: DOMPurify.sanitize(content),
    };
  
    createNewComment(newComment);

    e.currentTarget.reset();
  };

  return (
    <>
      {!user && (
          <div>
            <Link 
              to='/login'
              state={{ from: location.pathname }} 
              className="text-sm"
            >
              <span className="text-blue-800 font-semibold">Login</span>
              <span className="text-red-400"> to create a comment</span>
            </Link>
          </div>
        )}
      <form 
        className="mb-6 w-full flex items-center justify-between gap-8"
        onSubmit={handleSubmit} 
      >
        <textarea 
          name="content" 
          id="content" 
          placeholder='Write a comment'
          disabled={isPending || !user} 
          className='p-3 w-full outline-none rounded-xl'
        />
        <button
          type="submit"
          disabled={isPending || !user} 
          className='px-4 py-2 w-32 bg-purple-500 text-white rounded-xl disabled:bg-slate-400 disabled:text-slate-300'
        >
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  )
}
