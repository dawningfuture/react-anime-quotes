import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import AnimePage from "./pages/Anime/AnimePage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Switch>
          <Route path="/anime/:anime">
            <AnimePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
