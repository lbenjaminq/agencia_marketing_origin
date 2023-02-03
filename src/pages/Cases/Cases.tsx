import { BlogCases, HeaderCases } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Cases() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <HeaderCases />
      <BlogCases />
    </Layout>
  )
}
export default Cases;