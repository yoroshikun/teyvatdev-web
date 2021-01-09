import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import {
  GetMeQuery,
  useUpdateSlimeColorMutation,
  useUpdateTokenMutation,
} from '../generated/graphql';
import { ssrGetMe } from '../generated/page';
import { logout } from '../helpers/auth';
import { withApollo } from '../lib/withApollo';

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

// TODO, this is weird, the page is ssr but it requires the client side query thing to render it
const Dashboard = ({ data, token }: { data: GetMeQuery; token: string }) => {
  // const { data } = useGetMeQuery();
  const [tokenGenerated, setTokenGenerated] = useState(false);
  const [
    updateSlimeColorMutation,
    { error: updateSlimeColorError },
  ] = useUpdateSlimeColorMutation();
  const [
    updateTokenMutation,
    { error: updateTokenError },
  ] = useUpdateTokenMutation();

  const slimeColor = useMemo(
    () => (data?.me?.slimeColor ? data.me.slimeColor : randomColor()),
    [],
  );

  const saveToken = async () => {
    if (tokenGenerated) return;
    await updateSlimeColorMutation({ variables: { color: slimeColor } });
    await updateTokenMutation({ variables: { token } });
    setTokenGenerated(true);
  };

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
      <div className="flex flex-col justify-center items-center h-screen overflow-x-auto px-5 py-10">
        <div className="max-w-lg text-center">
          <div>
            <h1 className="text-5xl font-bold">Hey {data?.me?.username}!</h1>
            <p className="text-lg mt-2">
              Thank you so much for joining the beta!
            </p>
            {data?.me?.userSecret?.activated ? (
              <p className="text-lg mt-2">
                Awesome your account is activated and ready to use the API
              </p>
            ) : (
              <p className="text-lg mt-2">
                Looks like your account is not activated, please check your
                email for an activation email and follow the link :)
              </p>
            )}
          </div>
          {updateTokenError ||
            (updateSlimeColorError && (
              <h3 className="mt-2 text-2xl font-semibold text-error">
                Oh no something went wrong with the API calls, please refresh
                your page
              </h3>
            ))}
          {data?.me?.userSecret?.activated &&
            !data?.me?.userSecret?.token &&
            !tokenGenerated && (
              <>
                <h3 className="mt-2 text-2xl font-semibold">
                  Your very own slime
                </h3>
                <p>
                  You can generate your API key and recive your very own slime
                  by clicking on original slimy below
                </p>
              </>
            )}
          {data?.me?.userSecret?.token || (token && tokenGenerated) ? (
            <div className="mt-2 p-2 bg-primary-dark rounded-md overflow-x-auto">
              <p className="text-md text-white font-semibold">
                {data?.me?.userSecret?.token || (tokenGenerated && token)}
              </p>
            </div>
          ) : null}
          <div className="m-2">
            {data?.me?.slimeColor ? (
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1080 1080"
                className="h-32 w-32 mx-auto"
                style={{ fill: `#${data?.me?.slimeColor}` }}
              >
                <path
                  d="M1037.25,601.88c-17.73-78.14-61.62-139.33-117.56-189.41c-4.47-4.05-9.03-8.01-13.68-11.88c0,0,0,0-0.09,0
	c-1.46-1.38-2.93-2.5-4.39-3.79c-6.5-5.31-13.14-10.47-19.85-15.54c26.05-47.04,57.68-135.42,27.8-259.01
	c0,0-144.83,14.69-203.6,149.03c-0.65,1.47-1.22,2.92-1.81,4.36c-24.31-12.35-48.11-24.14-70.61-35.64
	c-20.82-10.66-40.53-21.16-58.52-31.58c-13.85-8-27.45-14.89-40.87-20.74c-87.87-37.95-166.61-29.69-234.43,5.42
	c-27.28,14.21-52.8,32.76-76.46,54.38C156.75,149.3,41.35,137.51,41.35,137.51C1.14,303.84,72.52,406.37,91.41,429.85
	c-9.7,19.71-18.51,39.5-26.27,58.95c-4.14,10.32-7.92,20.65-11.54,30.72c-2.06,6.03-4.04,12.05-5.93,17.9
	c-10.07,31.41-17.21,60.93-21.17,86.75C-3.11,816.25,23.4,957.3,548.35,957.9C1101.79,958.42,1080.79,793.61,1037.25,601.88z
	 M142.15,348.64L89.33,197.49c71.77,31.32,100.03,83.03,100.03,83.03C152.69,314.45,142.15,348.64,142.15,348.64z M366.19,718.72
	c-33.64,0-60.91-61.43-60.91-137.21s27.27-137.21,60.91-137.21s60.92,61.43,60.92,137.21S399.83,718.72,366.19,718.72z
	 M677.96,718.72c-33.64,0-60.91-61.43-60.91-137.21s27.27-137.21,60.91-137.21c33.64,0,60.91,61.43,60.91,137.21
	S711.6,718.72,677.96,718.72z M841.07,358.02c-34.58-28.49-69.38-40.15-69.38-40.15l107.95-120.59
	C881.42,290.33,841.07,358.02,841.07,358.02z"
                />
              </svg>
            ) : (
              <div className="flex flex-row justify-center text-center">
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1080 1080"
                  className={`h-32 w-32 transition duration-500 ease-in-out transform ${
                    tokenGenerated ? '-translate-x-1/2' : 'translate-x-1/2'
                  }`}
                  style={{ fill: `#ffffff` }}
                >
                  <path
                    d="M1037.25,601.88c-17.73-78.14-61.62-139.33-117.56-189.41c-4.47-4.05-9.03-8.01-13.68-11.88c0,0,0,0-0.09,0
	c-1.46-1.38-2.93-2.5-4.39-3.79c-6.5-5.31-13.14-10.47-19.85-15.54c26.05-47.04,57.68-135.42,27.8-259.01
	c0,0-144.83,14.69-203.6,149.03c-0.65,1.47-1.22,2.92-1.81,4.36c-24.31-12.35-48.11-24.14-70.61-35.64
	c-20.82-10.66-40.53-21.16-58.52-31.58c-13.85-8-27.45-14.89-40.87-20.74c-87.87-37.95-166.61-29.69-234.43,5.42
	c-27.28,14.21-52.8,32.76-76.46,54.38C156.75,149.3,41.35,137.51,41.35,137.51C1.14,303.84,72.52,406.37,91.41,429.85
	c-9.7,19.71-18.51,39.5-26.27,58.95c-4.14,10.32-7.92,20.65-11.54,30.72c-2.06,6.03-4.04,12.05-5.93,17.9
	c-10.07,31.41-17.21,60.93-21.17,86.75C-3.11,816.25,23.4,957.3,548.35,957.9C1101.79,958.42,1080.79,793.61,1037.25,601.88z
	 M142.15,348.64L89.33,197.49c71.77,31.32,100.03,83.03,100.03,83.03C152.69,314.45,142.15,348.64,142.15,348.64z M366.19,718.72
	c-33.64,0-60.91-61.43-60.91-137.21s27.27-137.21,60.91-137.21s60.92,61.43,60.92,137.21S399.83,718.72,366.19,718.72z
	 M677.96,718.72c-33.64,0-60.91-61.43-60.91-137.21s27.27-137.21,60.91-137.21c33.64,0,60.91,61.43,60.91,137.21
	S711.6,718.72,677.96,718.72z M841.07,358.02c-34.58-28.49-69.38-40.15-69.38-40.15l107.95-120.59
	C881.42,290.33,841.07,358.02,841.07,358.02z"
                  />
                </svg>
                <svg
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1080 1080"
                  className={`h-32 w-32 transition duration-500 ease-in-out transform ${
                    tokenGenerated
                      ? 'translate-x-1/2'
                      : '-translate-x-1/2 cursor-pointer'
                  }`}
                  style={{ fill: `#${tokenGenerated ? slimeColor : 'ffffff'}` }}
                  onClick={saveToken}
                >
                  <path
                    d="M1037.25,601.88c-17.73-78.14-61.62-139.33-117.56-189.41c-4.47-4.05-9.03-8.01-13.68-11.88c0,0,0,0-0.09,0
	c-1.46-1.38-2.93-2.5-4.39-3.79c-6.5-5.31-13.14-10.47-19.85-15.54c26.05-47.04,57.68-135.42,27.8-259.01
	c0,0-144.83,14.69-203.6,149.03c-0.65,1.47-1.22,2.92-1.81,4.36c-24.31-12.35-48.11-24.14-70.61-35.64
	c-20.82-10.66-40.53-21.16-58.52-31.58c-13.85-8-27.45-14.89-40.87-20.74c-87.87-37.95-166.61-29.69-234.43,5.42
	c-27.28,14.21-52.8,32.76-76.46,54.38C156.75,149.3,41.35,137.51,41.35,137.51C1.14,303.84,72.52,406.37,91.41,429.85
	c-9.7,19.71-18.51,39.5-26.27,58.95c-4.14,10.32-7.92,20.65-11.54,30.72c-2.06,6.03-4.04,12.05-5.93,17.9
	c-10.07,31.41-17.21,60.93-21.17,86.75C-3.11,816.25,23.4,957.3,548.35,957.9C1101.79,958.42,1080.79,793.61,1037.25,601.88z
	 M142.15,348.64L89.33,197.49c71.77,31.32,100.03,83.03,100.03,83.03C152.69,314.45,142.15,348.64,142.15,348.64z M366.19,718.72
	c-33.64,0-60.91-61.43-60.91-137.21s27.27-137.21,60.91-137.21s60.92,61.43,60.92,137.21S399.83,718.72,366.19,718.72z
	 M677.96,718.72c-33.64,0-60.91-61.43-60.91-137.21s27.27-137.21,60.91-137.21c33.64,0,60.91,61.43,60.91,137.21
	S711.6,718.72,677.96,718.72z M841.07,358.02c-34.58-28.49-69.38-40.15-69.38-40.15l107.95-120.59
	C881.42,290.33,841.07,358.02,841.07,358.02z"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="flex flex-row">
            <Link href="https://docs.teyvat.dev">
              <button className="bg-primary-light m-2 p-2 text-lg w-1/2 font-bold transition-colors duration-200 hover:bg-primary-dark">
                Docs
              </button>
            </Link>
            <button
              type="submit"
              onClick={logout}
              className="bg-primary m-2 p-2 text-lg w-1/2 font-bold transition-colors duration-200 hover:bg-primary-dark"
            >
              Log out
            </button>
          </div>
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

  const getMe = await ssrGetMe.getServerPage({}, ctx);

  return { props: { ...getMe.props, token } };
};

export default withApollo(ssrGetMe.withPage(() => ({}))(Dashboard));
