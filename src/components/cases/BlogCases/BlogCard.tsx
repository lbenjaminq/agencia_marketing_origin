import { Link } from 'react-router-dom';

interface Props {
  id: string
  title: string
  href: string
  category: Category
  description: string
  imageUrl: string
}

interface Category {
  name: string
  href: string
}

const BlogCard: React.FC<Props> = ({ id, title, href, category, description, imageUrl }) => {
  const onMouseEnter = () => {
    const title_element = document.getElementById(id);
    title_element?.classList.add('text-orange-button');
    const img_element = document.getElementById(imageUrl);
    img_element?.classList.add('object-scale-down');
  };

  const onMouseLeave = () => {
    const title_element = document.getElementById(id);
    title_element?.classList.remove('text-orange-button');
    const img_element = document.getElementById(imageUrl);
    img_element?.classList.remove('object-scale-down');
  };

  return (
    <Link
      to="/services/id"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <img
          id={imageUrl}
          className="h-96 w-full object-cover object"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6 ">
        <div className="flex-1">
          <p className="text-xl font-medium text-indigo-600">
            <a href={category.href} className="hover:underline">
              {category.name}
            </a>
          </p>
          <a href={href} className="mt-2 block">
            <p id={id} className="lg:text-4xl text-xl pt-4 pb-6 font-semibold transition duration-300 text-gray-900">{title}</p>
            <p className="mt-3 text-xl leading-8 text-gray-500">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
        </div>
      </div>
    </Link>
  )
}

export default BlogCard;