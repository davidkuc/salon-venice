import { Provider } from "react-redux";
import "../components/providers/icons";

import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import store from "../store/index";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
