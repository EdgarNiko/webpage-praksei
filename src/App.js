import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  app: {
    background: "#f4e8ec",
    fontFamily: ['"Segoe UI"'].join(","),
    margin: "0",
    padding: "0"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
