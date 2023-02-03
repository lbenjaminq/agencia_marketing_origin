import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Error404() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      Error404
    </Layout>
  )
}
export default Error404;