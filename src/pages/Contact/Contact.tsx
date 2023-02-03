import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      Contact
    </Layout>
  )
}
export default Contact;