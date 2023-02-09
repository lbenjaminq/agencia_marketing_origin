import { BlogCases, Header } from 'components';
import Layout from 'components/Layout/Layout';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Cases() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>OneGo! | Cases Studies</title>
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
      <Header title='Cases Studies' description='We believe that great products cannot happen without passion, intelligence, and personal commitment, and it is demonstrated by our portfolio that spans different customers, industries, and target audiences.' />
      <BlogCases />
    </Layout>
  )
}
export default Cases;