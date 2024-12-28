import { PostItem } from "../posts";
import { postsList } from "../../constants/constants";

export const PostsList = () => {
  return (
    <div className='mb-8 flex flex-col gap-4'>
      {postsList.map(item => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  )
}
