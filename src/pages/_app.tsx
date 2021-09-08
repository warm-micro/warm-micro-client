import Layout from '@/modules/layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import '../global.css';
function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith('/workspace/')) {
    return (
      // <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      // </Provider>
    );
  }

  return (
    // <Provider store={store}>
      <Component {...pageProps} />
    // </Provider>
  );
}
export default MyApp;
