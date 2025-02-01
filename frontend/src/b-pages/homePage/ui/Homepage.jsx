import { Breadcrumbs } from '@/c-widgets/breadcrumbs/Breadcrumbs';
import { PageTitle } from '@/s-shared/ui/pageTitle/PageTitle.jsx'
import { CreatePostWidget } from '@/c-widgets/createPost/CreatePostWidget'
import { CategoriesWidget } from '@/c-widgets/categories';
import { FeaturedPostLV, FeaturedPostsSV } from '@/c-widgets/featuredPost';
import { PostsList } from '@/c-widgets/postsList';
import { useNewestPosts } from '@/e-entities/post/lib/useNewestPosts';

export const Homepage = () => {

  const { newestPosts, error, isLoading } = useNewestPosts();
  
  return (
    <main className='mt-4 flex flex-col gap-4'>
      <Breadcrumbs text='Blogs and Articles' />

      <section className='flex items-center justify-between'>
        <PageTitle />
        <CreatePostWidget />
      </section>
      
      <CategoriesWidget />
      {isLoading 
        ? <span>Loading posts...</span>
        : !newestPosts || error
            ? <span>Something went wrong! {error.message}</span>
            : (
              <section className="mt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="md:mb-8 lg:mb-2 xl:h-full flex flex-col gap-4">
                  {newestPosts?.posts?.slice(0, 1).map((post, index) => <FeaturedPostLV key={post._id} post={post} number={index+1} />)}
                </div>
                <div 
                  className="mb-8 lg:h-full grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1
                            lg:grid-rows-3 lg:grid-cols-1 gap-4 lg:gap-8"
                >
                  {newestPosts?.posts?.slice(1,4).map((post, index) => <FeaturedPostsSV key={post._id} post={post} number={index+2} />)}
                </div>
              </section>
              )
      }

      <PostsList />
     
    </main>
  )
}