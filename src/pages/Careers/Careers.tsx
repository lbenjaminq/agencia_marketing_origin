import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Careers() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      Careers
    </Layout>
  )
}
export default Careers;