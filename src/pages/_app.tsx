import Layout from '@/modules/layout/Layout';
import type { AppProps } from 'next/app';
import '../global.css';
function MyApp({ Component, pageProps,router }: AppProps) {
  
  if (router.pathname.startsWith('/workspace/')) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
 
  return <Component {...pageProps} />;
}
export default MyApp;
