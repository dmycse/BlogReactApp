import {useQuery } from '@tanstack/react-query';
import { fetchNewestPosts } from '@/s-shared/api/posts/fetchNewestPosts';

export const useNewestPosts = () => {

  const { data: newestPosts, error, isLoading } = useQuery({
    queryKey: ['newestPosts'],
    queryFn: () => fetchNewestPosts()
  });

  return {
    newestPosts,
    error,
    isLoading
  };
}