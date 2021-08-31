import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#f4e8ec",
    fontFamily: ['"Segoe UI"'].join(","),
    margin: "10",
    padding: "10",
    width: "100%",
    height: "100%",
    fontSize: "16px",
    textAlign: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.app}>
        <CssBaseline />
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
