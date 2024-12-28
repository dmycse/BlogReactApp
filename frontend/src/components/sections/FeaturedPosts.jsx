import { Link } from "react-router-dom"
import { featuredPosts } from "../../constants/constants"
import { Fragment } from "react";

export const FeaturedPosts = () => {
  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {featuredPosts.slice(0, 1).map(item => (
          <Fragment key={item.id}>
            <img 
              loading="lazy" 
              src={item.imageUrl} 
              alt="image" 
              width={895} 
              className="rounded-xl object-cover"
            />
            <div className="flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">0{item.id}.</h1>
              <Link to="/test" className="lg:text-lg text-purple-500">{item.category}</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link 
              to="/test" 
              className="text-xl lg:text-3xl font-semibold lg:font-bold">
              {item.title}
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {featuredPosts.slice(1).map(item => (
          <div key={item.id} className="lg:h-1/3 flex justify-between gap-4">
            <div className="w-1/3 aspect-video">
              <img 
                loading="lazy" 
                src={item.imageUrl} 
                alt="image"
                className="w-full h-full rounded-xl object-cover "
                width={298}
              />
            </div>
            <div className="w-2/3 flex flex-col gap-4">
              <div className="mb-2 flex items-center gap-4 text-sm lg:text-base">
                <h1 className="font-semibold">0{item.id}.</h1>
                <Link to="/test" className="lg:text-lg text-purple-500">{item.category}</Link>
                <span className="text-gray-500 text:sm">2 days ago</span>
              </div>
              <Link 
                to="/test" 
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold">
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
