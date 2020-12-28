import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { useGetMeQuery } from '../generated/graphql';
import { ssrGetMe, PageGetMeComp } from '../generated/page';
import { logout } from '../helpers/auth';
import { withApollo } from '../lib/withApollo';

// TODO, this is weird, the page is ssr but it requires the client side query thing to render it
const Dashboard: PageGetMeComp = () => {
  const { data } = useGetMeQuery();

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Teyvat.Dev - Genshin Impact API - Dashboard</title>
        <meta
          name="description"
          content="Dashboard of Teyvat.Dev API, serving developer resources for Genshin Impact"
        />
        <meta name="robots" content="noindex" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen px-5 py-10">
        <div className="max-w-lg text-center">
          <div>
            <h1 className="text-5xl font-bold">Hello {data?.me?.username}</h1>
            <p className="text-lg mt-2">
              Thank you so much for logging in! Unfortunately, this area is
              still under construction please check back later
            </p>
          </div>
          <Image
            src="/white-slime.svg"
            alt="Teyvat.Dev logo"
            height={128}
            width={128}
          />
          <button
            type="submit"
            onClick={logout}
            className="bg-primary mt-2 p-2 text-lg w-full font-bold hover:bg-primary-dark"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies?.token;
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return await ssrGetMe.getServerPage({}, ctx);
};

export default withApollo(ssrGetMe.withPage(() => ({}))(Dashboard));
