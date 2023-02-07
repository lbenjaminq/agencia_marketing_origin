import { BlogCases, Header } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Cases() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <Header title='Cases Studies' description='We believe that great products cannot happen without passion, intelligence, and personal commitment, and it is demonstrated by our portfolio that spans different customers, industries, and target audiences.' />
      <BlogCases />
    </Layout>
  )
}
export default Cases;