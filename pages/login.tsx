import * as yup from 'yup';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../components/Input';
import { withApollo } from '../lib/withApollo';
import { useLoginMutation } from '../generated/graphql';
import { login } from '../helpers/auth';
import { GetServerSideProps } from 'next';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Login = (): React.ReactElement => {
  const [loginMutation, { loading, error: apiError }] = useLoginMutation({
    onCompleted: (data: { login: { token: string } }) => {
      data && login({ token: data.login.token });
    },
  });

  const { register, errors, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }: FormData) =>
    loginMutation({
      variables: {
        email,
        password,
      },
    });

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Teyvat.Dev - Genshin Impact API - Login</title>
        <meta
          name="description"
          content="Login to Teyvat.Dev API, serving developer resources for Genshin Impact"
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
        <div className="flex flex-col justify-center items-center w-full lg:h-screen lg:w-3/5 py-5 order-2 lg:order-1">
          <div className="max-w-lg overflow-y-auto mx-5">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <h2 className="text-lg mt-5 text-center">
              Manage your Teyvat.dev account and more by logging in
            </h2>

            {apiError ? (
              apiError.message ? (
                <h2 className="text-error">
                  {apiError.message.split('()')[1]}
                </h2>
              ) : (
                <h2 className="text-error">
                  Oops looks like the API returned an unknown error, if this
                  keeps happening you should contact us though discord or email
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
                {loading ? `Logging in` : `Log in`}
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
                <Link href="/request-reset-password">
                  <span className="font-bold text-primary-light cursor-pointer">
                    Forgot Password
                  </span>
                </Link>
              </p>
            </div>
          </div>
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

export default withApollo(Login);
