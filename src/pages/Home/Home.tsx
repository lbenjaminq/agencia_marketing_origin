import { BlogSection, CTA, Customers, Features, Header, Incentives, UseCases, } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <Header />
      <Incentives />
      <UseCases />
      <Features />
      <CTA />
      <Customers />
      <BlogSection />
    </Layout>
  )
}
export default Home;