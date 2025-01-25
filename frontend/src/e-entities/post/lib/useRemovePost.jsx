import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '@/s-shared/api/posts/deletePost';
import { toast } from 'react-toastify';

export const useRemovePost = (getToken, postId) => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {mutate: removePost, isPending: isRemovePending, error: postRemovingError} = useMutation({
    mutationFn: async () => {
      let token = await getToken();
      return deletePost(token, postId);
    },
    onSettled: (res, error) => {
      if (error) {
        toast.error(error.response.data);
      }
      toast.success('Post removed successfully');
      queryClient.invalidateQueries({queryKey:  ['posts']});
      navigate('/');
    }
  });

  return {
    removePost,
    isRemovePending,
    postRemovingError
  };
}