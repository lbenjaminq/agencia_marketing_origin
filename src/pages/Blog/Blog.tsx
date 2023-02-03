import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      Blog
    </Layout>
  )
}
export default Blog;