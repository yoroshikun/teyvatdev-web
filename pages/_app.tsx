import { AppProps } from 'next/app';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return <Component {...pageProps} />;
};

export default App;
