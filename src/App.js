import React from "react";

import { About, Footer, Header, Skills, Projects } from "./container";
import { Nav } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <Nav />
    </div>
  );
};

export default App;
