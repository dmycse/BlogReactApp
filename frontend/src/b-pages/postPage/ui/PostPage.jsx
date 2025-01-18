import { Breadcrumbs } from "@/c-widgets/breadcrumbs/Breadcrumbs";
import { PostContent } from "@/c-widgets/postContent";

export const PostPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Breadcrumbs text='Post' />
      <article className="flex flex-col gap-8">
        <PostContent />
      </article>
    </section>
  )
}
