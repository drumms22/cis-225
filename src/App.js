import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import Nav from "./components/nav";
import Menu from "./components/menu";
import "./App.css";
import "./components/css/main-layout.css";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/aboutUs' component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
