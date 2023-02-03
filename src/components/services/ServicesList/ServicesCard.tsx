import { Post } from "interfaces"

interface Props {
  post: Post
}

const ServicesCard: React.FC<Props> = ({ post }) => {

  const onMouseEnter = () => {
    const title_element = document.getElementById(post.id);
    title_element?.classList.add('text-orange-button');
  };

  const onMouseLeave = () => {
    const title_element = document.getElementById(post.id);
    title_element?.classList.remove('text-orange-button');
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="w-full relative p-8 h-96 lg:h-[200pm] bg-white hover:-translate-y-1 transition duration-300 ease-in-out">
      <div className="w-full">
        img
      </div>
      <h2 className="text-xl font-semibold text-gray-900 pt-8" >{post.title}</h2>
      <h2 className="text-lg font-regular text-gray-500 pt-2" >{post.title}</h2>
      <button id={post.id} className="absolute bottom-0 left-0 p-8">Learn More</button>
    </div>
  )
}
export default ServicesCard;