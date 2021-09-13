import App, { AppInitialProps, AppContext } from 'next/app';
import Layout from '@/modules/layout/Layout';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import '../global.css';
import { RootState } from '@/app/rootReducer';
import { wrapper } from '@/app/store';

// class MyApp extends App<ReduxWrapperAppProps<RootState>> {
//   render() {
//   const { Component, pageProps, store, router } = this.props;
//   if (router.pathname.startsWith('/workspace/')) {
//     return (
//       <Provider store={store}>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//        </Provider>
//     );
//   }

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
//     }
// }

// export default withRedux(createStore(withReduxSaga(MyApp));
class WrappedApp extends App<AppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    if (router.pathname.startsWith('/workspace/')) {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
