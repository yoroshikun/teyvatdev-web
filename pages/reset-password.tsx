import * as yup from 'yup';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../components/Input';
import { GetServerSideProps } from 'next';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const ResetPassword = (): React.ReactElement => {
  const [resetComplete, setResetComplete] = useState(false);
  const [apiError, setApiError] = useState<boolean | Record<string, any>>(
    false,
  );

  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    setApiError(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/user/resetPassword`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            token: atob(
              decodeURIComponent(window.location.search.split('=')[1]),
            ),
          }),
        },
      );

      if (!response.ok) {
        throw response;
      }

      return setResetComplete(true);
    } catch (err) {
      return setApiError(err.json ? await err.json() : true);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Teyvat.Dev - Genshin Impact API - Reset Password</title>
        <meta
          name="description"
          content="Reset password for Teyvat.Dev API, serving developer resources for Genshin Impact"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col lg:flex-row ">
        <div className="flex flex-col justify-center items-center w-full lg:h-screen lg:w-3/5 py-5 order-2 lg:order-1">
          {resetComplete ? (
            <div className="max-w-lg overflow-y-auto">
              <h1 className="text-5xl font-bold text-center">
                Your password has been reset!
              </h1>
              <h2 className="text-lg mt-5 text-center">
                You should now be able to log into your account with the new
                password. If you are still having issues please contact us by
                email{' '}
                <a
                  href="mailto:contact@teyvat.dev"
                  className="text-primary bg-secondary"
                >
                  contact@teyvat.dev
                </a>{' '}
                or message us in the
                <span className="text-primary bg-secondary">
                  #tech-support
                </span>{' '}
                channel in the discord!
              </h2>
              <Link href="/login">
                <button className="bg-primary mt-2 p-2 text-lg w-full font-bold hover:bg-primary-dark">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="max-w-lg overflow-y-auto mx-5">
              <h1 className="text-5xl font-bold text-center">
                Lets reset your password
              </h1>
              <h2 className="text-lg mt-5 text-center">
                Enter your email and a new password below as your new password
              </h2>

              {apiError ? (
                typeof apiError === 'object' && apiError.error ? (
                  <h2 className="text-error">{apiError.error}</h2>
                ) : (
                  <h2 className="text-error">
                    Oops looks like the API returned an unknown error, if this
                    keeps happening you should contact a dev though discord or
                    email
                  </h2>
                )
              ) : null}
              <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  ref={register}
                  error={errors.email}
                  errorMessage="Invalid E-Mail Address."
                  autoComplete="email"
                  type="email"
                  name="email"
                  label="E-Mail"
                />
                <Input
                  ref={register}
                  error={errors.password}
                  errorMessage="Must be at least 8 characters long."
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  label="Password"
                />
                <button
                  type="submit"
                  className="bg-primary mt-2 p-2 text-lg w-full font-bold hover:bg-primary-dark"
                >
                  Reset Password
                </button>
              </form>
              <div className="flex justify-between">
                <p className="mt-2">
                  Need an account?{' '}
                  <Link href="/signup">
                    <span className="font-bold text-primary-light cursor-pointer">
                      Signup
                    </span>
                  </Link>
                </p>
                <p className="mt-2">
                  <Link href="/login">
                    <span className="font-bold text-primary-light cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:h-screen lg:w-2/5 bg-primary p-5 order-1 lg:order-2">
          <Image
            src="/white-slime.svg"
            alt="Teyvat.Dev logo"
            height={128}
            width={128}
          />
          <h1 className="text-5xl font-bold text-center">Teyvat.Dev</h1>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies?.token;
  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: '/dashboard',
      },
    };
  }

  return { props: {} };
};

export default ResetPassword;
