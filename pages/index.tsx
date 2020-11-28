import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teyvat Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Teyvat <span>Dev</span>
        </h1>

        <p className={styles.description}>Coming soon</p>
        {/* Edit here, have fun! */}
        {/* You should use a slime somewhere (images in the public) */}
      </main>

      <footer className={styles.footer}>{/* Edit here */}</footer>
    </div>
  );
};

export default Home;
