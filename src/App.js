import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        {/**  <Route component={Error} /> */}
        <Redirect to ="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
