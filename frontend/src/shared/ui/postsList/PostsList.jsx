import { useQuery } from '@tanstack/react-query';
import { PostItem } from "@/entities/post";
import { fetchPosts } from "@/shared/api/posts/fetchPosts";
import { postsList } from "@/shared/constants";

export const PostsList = () => {

  const { isPending, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });


  return (
    <div className='mb-8 flex flex-col gap-4'>
      <h2 className='my-8 text-2xl text-gray-600'>Recent Posts</h2>
      {postsList.map(item => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  )
}
