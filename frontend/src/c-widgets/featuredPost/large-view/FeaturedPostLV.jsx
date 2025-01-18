import { Link } from "react-router-dom"

export const FeaturedPostLV = ( {post }) => {
  return (
    <>
      {post.imageUrl &&
        <img 
          loading="lazy" 
          src={post.imageUrl} 
          alt="image" 
          width={895} 
          className="rounded-xl object-cover"
        />
      }
      <div className="flex items-center gap-4">
        <h1 className="font-semibold lg:text-lg">0{post.id}.</h1>
        <Link to="/test" className="lg:text-lg text-purple-500">{post.category}</Link>
        <span className="text-gray-500">2 days ago</span>
      </div>
      <Link 
        to="/test" 
        className="text-xl lg:text-3xl font-semibold lg:font-bold">
        {post.title}
      </Link>
    </>
  )
}
