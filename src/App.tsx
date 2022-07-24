import React, { Fragment } from "react";

import "./App.css";
import Layout from "./components/Layout/Layout";
import { Breakpoint, BreakpointProvider } from "react-socks";

function App() {
  return (
    <Fragment>
      <BreakpointProvider>
        <Layout>

        </Layout>
      </BreakpointProvider>
    </Fragment>
  );
}

export default App;
