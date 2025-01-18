import { useCreateComment } from '../lib/useCreateComment';
import DOMPurify from 'dompurify';

export const CreateComment = ({ postId }) => {

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
    <form 
      className="mb-8 w-full flex items-center justify-between gap-8"
      onSubmit={handleSubmit} 
    >
      <textarea 
        name="content" 
        id="content" 
        placeholder='Write a comment' 
        className='p-3 w-full outline-none rounded-xl'
      />
      <button 
        className='px-4 py-2 w-32 bg-purple-500 text-white rounded-xl'
      >
        {isPending ? "Sending..." : "Send"}
      </button>
    </form>
  )
}
