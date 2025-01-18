import { useAuth } from '@clerk/clerk-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createComment } from '@/s-shared/api/comments/createComment';

export const useCreateComment = (postId) => {

  const queryClient = useQueryClient();

  const { getToken } = useAuth();
  
  const {mutate: createNewComment, isPending, error} = useMutation({
    mutationFn: async (newComment) => {
      let token = await getToken();
      return createComment(newComment, token, postId);
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({queryKey:  ['comments', postId]})
    },
    onError: (error) => {
      toast.error(error.response.data);
    }
  });

  return {
    createNewComment,
    isPending,
    error
  };

};
