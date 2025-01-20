import { useQuery } from '@tanstack/react-query';
import { CommentItem } from '@/e-entities/comment';
import { fetchComments } from '@/s-shared/api/comments/fetchComments';

export const Comments = ({ postId }) => {

  const { data, error, isLoading } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId)
  });


  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong. Error: {error.message}</div>
  }
  return (
    <div className='flex flex-col gap-6'>
      {data?.map(comment => (
        <CommentItem key={comment._id} {...comment}/>
        ))
      }
    </div>
  )
}
