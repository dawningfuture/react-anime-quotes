import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimePage from "./pages/Anime/AnimePage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Router>
      <h1>Let's Learn some Anime Quotes!</h1>

      <Switch>
        <Route path="/anime/:anime">
          <AnimePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
