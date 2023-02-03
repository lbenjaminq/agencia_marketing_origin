import { Post } from "interfaces"
import ServicesCard from "./ServicesCard"

interface Props {
  posts: Post[]
  section_title: string
}

function ServicesList({ posts, section_title }: Props) {
  return (
    <div className="relative bg-gray-100 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 mb-20">
      <div className="absolute inset-0">
        <div className="h-auto bg-gray-50 sm:h-auto" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{section_title}</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <ServicesCard post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ServicesList