import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFeaturePost } from '@/s-shared/api/posts/fetchFeaturePost';
import { toast } from 'react-toastify';

export const useFuturedPost = (getToken, postId, postSlug) => {

  const queryClient = useQueryClient();

  const {mutate: futurePost, isPending: isFuturePending, error: postFutureError} = useMutation({
    mutationFn: async () => {
      let token = await getToken();
      return fetchFeaturePost(token, postId);
    },
    onSettled: (res, error) => {
      if (error) {
        toast.error(error.response.data);
      }
      toast.success('Post futured successfully');
      queryClient.invalidateQueries({queryKey:  ['post', postSlug]});
    }
  });

  return {
    futurePost,
    isFuturePending,
    postFutureError
  };
}