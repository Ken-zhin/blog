import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
  
 //*description below section "ClassNName"*//
export default function Home() {
  return (
    <Layout home>                                              
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Im a Ken-zhin J. Simeon, Live in San Jose city of San Fernando Pampanga,I am a student in UA studying Integration and architecture in 3rd year college,</p>
        <p>My Hobbies are playing games, reading and wathcing, For the Favorite music is "Bury the Light" in Food is Adobo.</p>
        <p>Seing myself in 5 years is pursuing innovation and create a piece of hardwork in web developer and sharing my skill to the younger ones.</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}