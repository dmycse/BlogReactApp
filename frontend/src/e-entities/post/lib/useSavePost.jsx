import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSavePost } from '@/s-shared/api/users/savePost';
import { toast } from 'react-toastify';

export const useSavePost = (getToken, postId) => {

  const queryClient = useQueryClient();

  const {mutate: savePost, isPending: isSavePending, error: postSavingError} = useMutation({
    mutationFn: async () => {
      let token = await getToken();
      return fetchSavePost(token, postId);
    },
    onSettled: (res, error) => {
      if (error) {
        toast.error(error.response.data);
      }
      toast.success('Post saved successfully');
      queryClient.invalidateQueries({queryKey:  ['savedPosts']});
    }
  });

  return {
    savePost,
    isSavePending,
    postSavingError
  };
}