import { Link } from 'react-router-dom';

export const Breadcrumbs = ({text}) => {
  return (
    <section className='flex gap-4'>
      <Link to="/">Home</Link>
      <span>•</span>
      <span className='text-purple-900'>{text}</span>
    </section>
  )
}
