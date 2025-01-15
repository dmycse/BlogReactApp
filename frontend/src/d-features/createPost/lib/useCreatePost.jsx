import { useNavigate } from 'react-router-dom';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { createPost } from '@/s-shared/api/posts/createPost';

export const useCreatePost = () => {

  const navigate = useNavigate();

  const { getToken } = useAuth();
  
  const {mutate: createNewPost, isPending, error} = useMutation({
    mutationFn: async (newPost) => {
      let token = await getToken();
      return createPost(newPost, token);
    },
    onSuccess: (res) => {
      toast.success('Post created successfully');
      navigate(`/posts/${res.slug}`);
    }
  });


  return {
    createNewPost,
    isPending,
    error
  }

}
