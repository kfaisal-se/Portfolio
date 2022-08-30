import React from "react";

import { Footer, Header, Skills, Experience, Projects } from "./container";
import { Nav } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <Nav />
    </div>
  );
};

export default App;
