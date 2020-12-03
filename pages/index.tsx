import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Home = (): React.ReactNode => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teyvat Dev - Genshin API</title>
        <meta
          name="description"
          content="Teyvat Dev is an API that serves developer resources for Genshin Impact"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.content}>
        <h1 className={styles.title}>
          Teyvat <span>Dev</span>
        </h1>
        <h2 className={styles.description}>
          An open API that serves developer resources for Genshin Impact
        </h2>
        <p className={styles.notice}>Coming Soon...</p>
        <div className={styles.socials}>
          <p>Find us on:</p>
          <div className={styles.icons}>
            <a
              href="https://discord.com/invite/AKtCEm7QEn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/icons/discord.png"
                alt="discord"
                height={64}
                width={64}
              />
            </a>
            <a
              href="https://github.com/yoroshikun/teyvatdev-web"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/icons/github.png"
                alt="github"
                height={64}
                width={64}
              />
            </a>
            <a
              href="mailto:contact@teyvat.dev"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/icons/email.png"
                alt="email"
                height={64}
                width={64}
              />
            </a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Image
          src="/Full_Colour_Slime.svg"
          alt="Teyvat Dev logo"
          height={38}
          width={38}
        />
        Teyvat.dev is not affiliated with or endorsed by miHoYo.
      </footer>
    </div>
  );
};

export default Home;
