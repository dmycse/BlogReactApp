import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';

import { Postcrubms } from '@/c-widgets/postcrumbs/Postcrumbs';
import { PostDetails } from '@/c-widgets/postDetails';
import { Comments } from '@/c-widgets/comments/ui/Comments';
import { CreateComment } from '@/d-features/createComment';
import { CustomImage } from '@/s-shared/ui/customImage';
import { fetchPost } from '@/s-shared/api/posts/fetchPost';


export const PostContent = () => {

  const { slug } = useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug)
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong. Error: {error.message}</div>
  }

  if (!data) {
    return <div>Post not found</div>
  }

  let cleanContent = DOMPurify.sanitize(data.content);

  return (
    <>
      <div className="flex gap-8">
        <div className="pt-8 lg:w-3/5 flex flex-col gap-6">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <Postcrubms 
            author={data.user.username} 
            category={data.category} 
            date={new Date(data.createdAt).toLocaleDateString()} 
          />
          <p className="text-gray-500 font-medium">
            {data.description}
          </p>
        </div>
        <div className="w-2/5 hidden lg:block">
          {data.img && (
            <CustomImage 
              src={data.img}
              alt="post image" 
              width={350}
              height={250} 
              className="rounded-xl"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="md:text-lg flex flex-col gap-6 text-justify">
          <div dangerouslySetInnerHTML={{__html: cleanContent}} />
        </div>
        <PostDetails
          username={data.user.username}
          img={data.user?.img} 
        />
      </div>
      <div className="mb-12 lg:w-3/5 flex flex-col gap-6">
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <CreateComment postId={data._id} />
        <Comments postId={data._id} />
      </div>
    </>  
  )
}
