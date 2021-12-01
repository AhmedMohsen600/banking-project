import Home from "./pages/Home";
import Services from "./pages/Services";
import "./styles/app.css";
import { Redirect, Route, Switch, useLocation } from "react-router";
import Footer from "./components/Footer";
import Programe from "./pages/Programe";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import React from "react";

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <ScrollToTop />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Redirect from="/home" to="/" />
        <Route path="/services" component={Services} />
        <Route path="/programme" component={Programe} />
        <Route path="/about" component={AboutUs} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
