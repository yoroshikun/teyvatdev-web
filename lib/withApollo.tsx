import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from './apolloClient';

export const withApollo = (Component: NextPage): React.ReactNode => (
  props: any,
) => {
  const apolloClient = useApollo(props.apolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...props} />
    </ApolloProvider>
  );
};
