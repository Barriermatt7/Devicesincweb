import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
