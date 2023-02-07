import { BlogSection, CTA, CustomersHome, Features, HeaderHome, Incentives, UseCases, } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <HeaderHome />
      <Incentives />
      <UseCases />
      <Features />
      <CTA />
      <CustomersHome />
      <BlogSection />
    </Layout>
  )
}
export default Home;