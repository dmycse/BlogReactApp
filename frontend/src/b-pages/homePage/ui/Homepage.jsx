import { Breadcrumbs } from '@/c-widgets/breadcrumbs/Breadcrumbs';
import { PageTitle } from '@/s-shared/ui/pageTitle/PageTitle.jsx'
import { CreatePostWidget } from '@/c-widgets/createPost/CreatePostWidget'
import { CategoriesWidget } from '@/c-widgets/categories';
import { FeaturedPostLV, FeaturedPostSV } from '@/c-widgets/featuredPost';
import { PostsList } from '@/c-widgets/postsList';
import { featuredPosts } from "@/s-shared/constants";

export const Homepage = () => {
  return (
    <main className='mt-4 flex flex-col gap-4'>
      <Breadcrumbs text='Blogs and Articles' />

      <section className='flex items-center justify-between'>
        <PageTitle />
        <CreatePostWidget />
      </section>
      
      <CategoriesWidget />

      <section className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {featuredPosts.slice(0, 1).map(item => <FeaturedPostLV key={item.id} post={item} />)}
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {featuredPosts.slice(1).map(item => <FeaturedPostSV key={item.id} post={item} />)}
        </div>
      </section>

      <PostsList />
     
    </main>
  )
}