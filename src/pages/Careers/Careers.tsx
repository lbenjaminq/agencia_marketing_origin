import { CustomersCareers, Header, Testimonial } from 'components';
import { Features } from 'components/careers';
import PositionsList from 'components/careers/PositionList';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Careers() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <Header title='Careers at Home' description='Welcome to the Fireart job portal! Join us to become a part of one of the most great IT companies in your career. A team with a clear vision, strong work ethic, and a lot of passion to the work that we do every day.' />
      <Testimonial />
      <CustomersCareers />
      <Features />
      <PositionsList />
    </Layout>
  )
}
export default Careers;