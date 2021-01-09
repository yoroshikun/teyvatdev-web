import * as yup from 'yup';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../components/Input';
import { GetServerSideProps } from 'next';
import { useSignupMutation } from '../generated/graphql';
import { withApollo } from '../lib/withApollo';
interface FormData {
  username: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Signup = (): React.ReactElement => {
  const [registered, setRegistered] = useState(false);
  const [signupMutation, { loading, error: apiError }] = useSignupMutation({
    onCompleted: () => setRegistered(true),
  });
  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ username, email, password }: FormData) => {
    try {
      return await signupMutation({
        variables: {
          username,
          email,
          password,
        },
      });
    } catch (err) {
      return;
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Teyvat.Dev - Genshin Impact API - Signup</title>
        <meta
          name="description"
          content="Signup for Teyvat.Dev API, serving developer resources for Genshin Impact"
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

      <main className="flex flex-col lg:flex-row ">
        <div className="flex flex-col justify-center items-center w-full lg:h-screen lg:w-2/5 bg-primary p-5">
          <Image
            src="/white-slime.svg"
            alt="Teyvat.Dev logo"
            height={128}
            width={128}
          />
          <h1 className="text-5xl font-bold text-center">Teyvat.Dev</h1>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:h-screen lg:w-3/5 py-5">
          {registered ? (
            <div className="max-w-lg overflow-y-auto">
              <h1 className="text-5xl font-bold text-center">
                You're all signed up!
              </h1>
              <h2 className="text-lg mt-5 text-center">
                An email has been sent to you for activation of your account,
                You can also now login to your account
              </h2>
              <Link href="/login">
                <button className="bg-primary mt-2 p-2 text-lg w-full font-bold hover:bg-primary-dark">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="max-w-lg overflow-y-auto mx-5">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <h2 className="text-lg mt-5 text-center">
                Get ready to supercharge your Genshin Impact development
                experience
              </h2>

              {apiError ? (
                typeof apiError === 'object' && apiError.message ? (
                  <h2 className="text-error text-center">
                    {apiError.message.split('()')[1]}
                  </h2>
                ) : (
                  <h2 className="text-error text-center">
                    Oops looks like the API returned an unknown error, if this
                    keeps happening you should contact a dev though discord or
                    email
                  </h2>
                )
              ) : null}
              <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  ref={register}
                  error={errors.username}
                  errorMessage="Invalid username."
                  autoComplete="username"
                  type="text"
                  name="username"
                  label="Username"
                />
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
                  {loading ? `Signing Up` : `Sign Up`}
                </button>
              </form>
              <div className="flex justify-between">
                <p className="mt-2">
                  Already have an account?{' '}
                  <Link href="/login">
                    <span className="font-bold text-primary-light cursor-pointer">
                      Login
                    </span>
                  </Link>
                </p>
                <p className="mt-2">
                  <Link href="/request-reset-password">
                    <span className="font-bold text-primary-light cursor-pointer">
                      Forgot Password
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          )}
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

export default withApollo(Signup);
