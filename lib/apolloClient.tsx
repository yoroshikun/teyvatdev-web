import { useMemo } from 'react';
import {
  ApolloClient,
  ApolloLink,
  NormalizedCacheObject,
  InMemoryCache,
  HttpLink,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

let apolloClient;

const createApolloClient = (token: string) => {
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const link = ApolloLink.from([
    // eslint-disable-next-line
    // @ts-ignore
    authLink,
    new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL || 'http://localhost:4000',
      credentials: 'same-origin',
      fetch,
    }),
  ]); // Concat Auth link with Http Link

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (
  initialState = null,
  token: string,
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (
  initialState: NormalizedCacheObject,
  token?: string,
): any => useMemo(() => initializeApollo(initialState, token), [initialState]);

export const getApolloClient = (
  ctx?,
  initialState?: NormalizedCacheObject,
): ApolloClient<NormalizedCacheObject> =>
  initializeApollo(initialState, ctx.req.cookies?.token);
