import { useInfinityPosts } from '../lib/useInfinityPosts';
import { PostItem } from "@/e-entities/post";

export const PostsList = () => {

  const { 
    posts, 
    error,
    isLoading,
    hasNextPage, 
    isFetchingNextPage,
    ref 
  } = useInfinityPosts();

  if (isLoading) {
    return <div>Posts Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='mb-8 flex flex-col gap-4'>
      <h2 className='my-8 text-2xl text-gray-600'>Recent Posts</h2>
      {posts?.map(item => (
        <PostItem key={item._id} post={item} />
      ))}
      <div ref={ref}>
        {!hasNextPage && <div>No more posts</div>}
        {isFetchingNextPage && <div>Loading next page...</div>}
      </div> 
    </div>
  )
}
