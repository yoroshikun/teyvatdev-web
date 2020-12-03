import { AppProps, NextWebVitalsMetric } from 'next/app';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return <Component {...pageProps} />;
};

export const reportWebVitals = (metric: NextWebVitalsMetric): void | null =>
  process.env.NODE_ENV === 'development' ? console.log(metric) : null;

export default App;
