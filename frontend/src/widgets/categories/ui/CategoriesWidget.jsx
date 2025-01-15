import { CategoriesItems } from '@/entities/categories';
import { SearchInput } from "@/shared/ui/searchInput/SearchInput";

export const CategoriesWidget = () => {
  return (
    <section className='p-4 shadow-lg hidden md:flex items-center justify-center gap-8 bg-white rounded-lg'>
      <CategoriesItems   />
      <span className='text-xl font-medium'>|</span>
      <SearchInput />
    </section>
  )
}