import type { NextPage } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/subscribe-button/subscribe-button.component';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome!</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="a avatar illustration" />
      </main>
    </>
  )
}

export default Home;
