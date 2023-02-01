import { BlogSection, CTA, Customers, Features, Header, Incentives, UseCases, } from 'components';
import Layout from 'components/Layout/Layout';

function Home() {
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