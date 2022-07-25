import { BreakpointProvider } from "react-socks";
import { Provider } from "react-redux";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import store from "../store/index";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BreakpointProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BreakpointProvider>
    </Provider>
  );
}

export default App;
