import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heroku Flow Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Your test <a href="https://nextjs.org">Next.js</a> app is up and
          running!
        </h1>

        <p className={styles.description}>
          Any questions? Check out my website at{' '}
          <a href="https://henryjin.dev">https://henryjin.dev</a>
        </p>
      </main>
    </div>
  );
}
