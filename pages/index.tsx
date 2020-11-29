import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teyvat Dev</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.hero}>
        coming soon
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Teyvat <span>Dev</span>
        </h1>

        <div className={styles.socials}>
          <p>Find us on:</p>
          <div className={styles.icons}>
            <a href="https://discord.gg/t9kT4J3w" target="_blank" rel="noreferrer noopener">
              <img src="/icons/discord.png" />
            </a>
            <a href="https://github.com/yoroshikun/teyvatdev-web" target="_blank" rel="noreferrer noopener">
              <img src="/icons/github.png" />
            </a>
            <a href="mailto:contact@teyvat.dev" target="_blank" rel="noreferrer noopener">
              <img src="/icons/email.png" />
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Teyvat.dev is not affiliated with or endorsed by miHoYo. </footer>
    </div>
  );
};

export default Home;
