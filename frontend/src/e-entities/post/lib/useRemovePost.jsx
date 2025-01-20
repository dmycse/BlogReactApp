import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '@/s-shared/api/posts/deletePost';
import { toast } from 'react-toastify';

export const useRemovePost = (getToken, postId) => {

  const navigate = useNavigate();

  const {mutate: removePost, isPending, error: postRemovingError} = useMutation({
    mutationFn: async () => {
      let token = await getToken();
      return deletePost(token, postId);
    },
    onSettled: (res, error) => {
      if (error) {
        toast.error(error.response.data);
        return;
      }
      toast.success('Post removed successfully');
      navigate('/');
    }
  });

  return {
    removePost,
    isPending,
    postRemovingError
  };
}