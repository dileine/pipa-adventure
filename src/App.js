import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/routes/Router";
import { GlobalStyles } from "../src/styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
