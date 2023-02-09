import { CTA, CustomersAbout, FeaturesAbout, Header, ImagesAbout, OurTeam, TestStats } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>OneGo! | About</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="#" />
        <meta name="author" content='OneGo!' />
        <meta name="publisher" content='OneGo!' />

        {/* Social Media Tags */}
        <meta property="og:title" content='OneGo! |Software Development' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="#" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='OneGo! | Software Development' />
        <meta
          name="twitter:description"
          content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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