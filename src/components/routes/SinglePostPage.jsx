import { Link } from "react-router-dom";
import { Breadcrumbs } from "../sections";
import { Postcrubms, PostsMenuActions } from "../posts";
import { categories } from "../../constants/constants";
import { Search } from "../../search";

export const SinglePostPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs text={'Single Post'} />
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="lg:w-3/5 flex flex-col gap-6">
            <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, distinctio?
            </h1>
            <Postcrubms author={'John Doe'} category={'Web design'} time={'a day ago'} />
            <p className="text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut consequatur molestias recusandae, totam fugit placeat voluptates. 
              Voluptas modi ex ea harum illo nam dolorum neque aliquid, 
              quia incidunt nemo saepe tempore. Id sunt dolor eaque.
            </p>
          </div>
          <div className="w-2/5 hidden lg:block">
            <img 
              loading="lazy" 
              src="/postImg.jpeg" 
              alt="image"
              width={600}  
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="lg:text-lg flex flex-col gap-6 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Blanditiis nulla atque eum perferendis obcaecati, placeat 
              eaque praesentium quae. Officia ratione, tempore fugiat 
              nemo consequatur esse maiores! Dolorem soluta et tenetur 
              iste inventore quo voluptatem eum magnam odio, enim sunt 
              ratione? Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Itaque velit quae maiores corporis unde vel nulla 
              praesentium magnam a nihil accusantium ipsum rem beatae 
              eaque sint, iste hic voluptatem nam!
            </p>
          </div>
          <div className="px-4 h-max sticky top-4">
            <h2 className="mb-4 text-sm font-medium">Author</h2>
            <div className="mb-2 flex items-center gap-6">
              <img 
                src="/userImg.jpeg" 
                alt="user"
                width={48}
                height={48} 
                className="w-12 h-12 rounded-full object-cover" 
              />
              <Link to="/" className="text-purple-900">John Doe</Link>
            </div>
            <p className="mb-2 text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, saepe?
            </p>
            <div className="flex gap-2">
              <Link to=''><img src="/facebook.svg" alt="facebook" width={24} /></Link>
              <Link to=''><img src="/instagram.svg" alt="facebook" width={24} /></Link>
            </div>
            <PostsMenuActions />
            <h2 className="mt-4 mb-2 text-sm font-medium">Categories</h2>
            <nav className="flex flex-col gap-2 text-sm">
              {categories.map(item => (
                <Link 
                  key={item.id} 
                  to={item.url}
                  className="text-sm text-blue-800 underline"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <h2 className="mt-4 mb-2 text-sm font-medium">Search</h2>
           <Search />
          </div>
        </div>
      </div>
    </section>
  )
}
