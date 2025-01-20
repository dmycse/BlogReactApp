import { useQuery } from '@tanstack/react-query';
import { fetchSavedPosts } from '@/s-shared/api/users/fetchSavedPosts';

export const useSavedPosts = (getToken) => {
  
  const { data: savedPosts, error, isLoading } = useQuery({
    queryKey: ['savedPosts'],
    queryFn: async () => {
      const token = await getToken();
      return fetchSavedPosts(token);
    }
  });

  return {
    savedPosts,
    error,
    isLoading
  };
}