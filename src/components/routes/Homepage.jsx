import React from 'react'
import { Breadcrumbs, Introduction, MainCategories } from '../sections';

export const Homepage = () => {
  return (
    <main className='mt-4 flex flex-col gap-4'>
      <Breadcrumbs />
      <Introduction />
      <MainCategories />
      {/* Fuatered posts */}
      {/* Postlist */}
    </main>
  )
}
