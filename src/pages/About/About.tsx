import { CTA, CustomersAbout, FeaturesAbout, Header, ImagesAbout, OurTeam, TestStats } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <Header title='About us' description=' Every company has its "Cinderella" story about those dark times when it has just started hitting the market. Our story takes its beginning in 2013, at a small office with a few like - minded people and bottomless cups of coffee, that kept us working throughout the night when we have just started building a company with a strong idea. We strived to build a brand that will contribute to the world with useful products that empower people and make their lives easier. We still believe in it today.' />
      <TestStats />
      <ImagesAbout />
      <CustomersAbout />
      <FeaturesAbout />
      <OurTeam />
      <CTA />
    </Layout>
  )
}
export default About;