import { Link } from "react-router-dom";

import { Breadcrumbs } from "@/widgets/breadcrumbs/Breadcrumbs";
import { Postcrubms } from "@/widgets/postcrumbs/Postcrumbs";
import { Comments } from "@/widgets/comments/ui/Comments";

import { PostActions } from "@/entities/post";

import { SearchInput } from "@/shared/ui/searchInput/SearchInput";
import { categories } from "@/shared/constants";
import { PostDetails } from "@/widgets/postDetails";

export const PostPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs text='Post' />
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
          <PostDetails />
        </div>
        <Comments />
      </div>
    </section>
  )
}
