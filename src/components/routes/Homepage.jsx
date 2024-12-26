import { Breadcrumbs, FeaturedPosts, Introduction, MainCategories, PostsList } from '../sections';

export const Homepage = () => {
  return (
    <main className='mt-4 flex flex-col gap-4'>
      <Breadcrumbs tetx='Blogs and Articles' />
      <Introduction />
      <MainCategories />
      <FeaturedPosts />
      <div className="">
        <h1 className='my-8 text-2xl text-gray-600'>Recent Posts</h1>
        <PostsList />
      </div>
    </main>
  )
}
