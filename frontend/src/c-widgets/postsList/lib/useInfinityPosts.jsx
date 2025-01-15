import { useEffect } from "react";
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from "react-intersection-observer";
import { fetchInfinityPosts } from "@/s-shared/api/posts/fetchPosts";

export const useInfinityPosts = () => {

  const { 
    data, 
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchInfinityPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {  
      return lastPage.hasMorePosts ? pages.length + 1 : undefined;
    },
    select: data => data.pages.flatMap(page => page.posts),
  });



  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return {
    posts: data,
    error,
    isLoading,
    hasNextPage, 
    isFetchingNextPage,
    ref
  }
  
};
