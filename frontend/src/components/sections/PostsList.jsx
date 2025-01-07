import { PostItem } from "../posts";
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from "../../lib/fetchPosts";
import { postsList } from "../../constants/constants";

export const PostsList = () => {

  const { isPending, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });


  return (
    <div className='mb-8 flex flex-col gap-4'>
      {postsList.map(item => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  )
}
