// import { Router } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./routes/Home";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;

    case "/contact":
      component = <Contact />;
      break;
    case "/signup":
      component = <SignUp />;
      break;

    default:
      break;
  }
  return (
    <div className="App">
      {component}
      <Footer />
    </div>
  );
}

export default App;
