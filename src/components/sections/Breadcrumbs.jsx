import React from 'react'
import { Link } from 'react-router-dom'

export const Breadcrumbs = () => {
  return (
    <section className='flex gap-4'>
      <Link to="/">Home</Link>
      <span>•</span>
      <span className='text-purple-900'>Blogs and Articles</span>
    </section>
  )
}
