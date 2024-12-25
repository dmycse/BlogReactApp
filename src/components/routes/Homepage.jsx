import { Breadcrumbs, FeaturedPosts, Introduction, MainCategories } from '../sections';

export const Homepage = () => {
  return (
    <main className='mt-4 flex flex-col gap-4'>
      <Breadcrumbs />
      <Introduction />
      <MainCategories />
      <FeaturedPosts />
      {/* Postlist */}
    </main>
  )
}
