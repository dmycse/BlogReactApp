import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { fetchRemoveComment } from '@/s-shared/api/comments/fetchRemoveComment';

export const useRemoveComment = (postId, commentId) => {

  const queryClient = useQueryClient();
  
  const { getToken } = useAuth();
  
  const {mutate: removeComment, isPending: isRemovingComment, error: commentRemovingError} = useMutation({
    mutationFn: async () => {
      let token = await getToken();
      return fetchRemoveComment(token, commentId);
    },
    onSettled: (res, error) => {
      if (error) {
        toast.error(error.response.data);
        return;
      }
      queryClient.invalidateQueries({queryKey:  ['comments', postId]});
      toast.success("Comment deleted successfully");
    },
    mutationKey: ['comments', postId],
  });

  return {
    removeComment,
    isRemovingComment,
    commentRemovingError
  };

};
