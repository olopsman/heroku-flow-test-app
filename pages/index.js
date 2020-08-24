import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heroku Flow Test App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Your test <a href="https://nextjs.org">Next.js</a> app is up and
          running!
        </h1>

        <p>
          Any questions? Check out my website at{' '}
          <a href="https://henryjin.dev">https://henryjin.dev</a>
        </p>
      </main>
    </div>
  );
}
