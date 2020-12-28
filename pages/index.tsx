import Head from 'next/head';
import Image from 'next/image';

const Home = (): React.ReactNode => {
  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Teyvat.Dev - Genshin API - Home</title>
        <meta
          name="description"
          content="Teyvat.Dev is an API that serves developer resources for Genshin Impact"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col">
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h1 className="text-5xl font-bold">
            Teyvat.<span className="text-primary">Dev</span>
          </h1>
          <h2 className="mt-3 text-xl">
            An open API that serves developer resources for Genshin Impact
          </h2>
          <p className="mb-5 mt-5 text-2xl text-opacity-50">Coming Soon...</p>
          <p>Find us on:</p>
          <div className="mt-2 grid grid-cols-3 gap-5">
            <a
              href="https://discord.com/invite/AKtCEm7QEn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src="/icons/discord.png"
                alt="discord"
                height={42}
                width={42}
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
                height={42}
                width={42}
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
                height={42}
                width={42}
              />
            </a>
          </div>
          <footer className="mt-5 w-full flex felx-col justify-center items-center text-center">
            <div className="mr-2 mt-2">
              <Image
                src="/full-colour-slime.svg"
                alt="Teyvat.Dev logo"
                height={38}
                width={38}
              />
            </div>
            Teyvat.dev is not affiliated with or endorsed by miHoYo.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
