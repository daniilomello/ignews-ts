import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/subscribe-button/subscribe-button.component';
import { stripe } from '../services/stripe.config';
import styles from '../styles/home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

const Home = ({product}: HomeProps) => {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="a avatar illustration" />
      </main>
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KNNHTH0f0wUQp40Ga2mqYQN', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount! / 100),

  }

  return {
    props: {
      product,
    }
  }
}
