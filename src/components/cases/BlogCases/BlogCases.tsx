import Carousel from '@itseasy21/react-elastic-carousel';
import BlogCard from './BlogCard';

const posts = [
  {
    id: "1",
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    id: "2",
    title: "FIles styles",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    imageUrl:
      "https://www.voicesofyouth.org/sites/voy/files/styles/large/public/images/2018-10/pexels-photo-1068523.jpeg?itok=okP2n-p2",
  },
  {
    id: "3",
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    id: "4",
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

function BlogCases() {

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 900, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1280, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
  ];

  return (
    <div className='relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-full '>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <Carousel
          itemsToScroll={3}
          itemsToShow={3}
          breakPoints={breakPoints}
          pagination={false}
          itemPadding={[0, 48]}
          isRTL={false}
        >
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              category={post.category}
              description={post.description}
              href={post.href}
              imageUrl={post.imageUrl}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default BlogCases;
