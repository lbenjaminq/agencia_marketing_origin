import { CTA, CustomersAbout, FeaturesAbout, HeaderAbout, ImagesAbout, OurTeam, TestStats } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <HeaderAbout />
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