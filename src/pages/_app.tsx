import "../styles/globals.css";

import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { BreakpointProvider } from "react-socks";

function App({ Component, pageProps }: AppProps) {
  return (
    <BreakpointProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BreakpointProvider>
  );
}

export default App;
