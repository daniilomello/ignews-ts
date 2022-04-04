import Head from 'next/head';
import styles from './posts.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março 2021</time>
            <strong>Creating a Monorepo with Learn e Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build system.</p>
          </a>

          <a href="#">
            <time>12 de março 2021</time>
            <strong>Creating a Monorepo with Learn e Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build system.</p>
          </a>

          <a href="#">
            <time>12 de março 2021</time>
            <strong>Creating a Monorepo with Learn e Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build system.</p>
          </a>
        </div>
      </main>
    </>
  )
}

