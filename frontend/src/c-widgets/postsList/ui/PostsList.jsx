import { useSearchParams } from "react-router-dom";
import { useInfinityPosts } from '../lib/useInfinityPosts';
import { PostItem } from "@/e-entities/post";

export const PostsList = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  
  const { 
    posts, 
    error,
    isLoading,
    hasNextPage, 
    isFetchingNextPage,
    ref 
  } = useInfinityPosts(searchParams);

  if (isLoading) {
    return <div>Posts Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className='mb-8 flex flex-col gap-2'>
      <h2 className='my-4 text-2xl text-gray-600'>{!(searchParams.size > 0) && 'Recent Posts'}</h2>
      <div 
        className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-sm:grid-cols-1 gap-8"
      >
        {posts?.map(item => (
          <PostItem key={item._id} post={item} />
        ))}
      </div>
      <div ref={ref}>
        {/* {!hasNextPage && <div>No more posts</div>} */}
        {isFetchingNextPage && <div>Loading next page...</div>}
      </div> 
    </div>
  )
}
