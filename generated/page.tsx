import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '../lib/apolloClient';
import type { NormalizedCacheObject } from '@apollo/client';

export async function getServerPageGetMe(
  options: Omit<Apollo.QueryOptions<Types.GetMeQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetMeQuery>({
    ...options,
    query: Operations.GetMeDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetMe = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetMeDocument, options);
};
export type PageGetMeComp = React.FC<{
  data?: Types.GetMeQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetMe = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>,
) => (WrappedComponent: PageGetMeComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetMeDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetMe = {
  getServerPage: getServerPageGetMe,
  withPage: withPageGetMe,
  usePage: useGetMe,
};
