import React, { Fragment } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { Breakpoint, BreakpointProvider } from "react-socks";

function App() {
  return (
    <Fragment>
      <BreakpointProvider>
        <Header />
      </BreakpointProvider>
    </Fragment>
  );
}

export default App;
