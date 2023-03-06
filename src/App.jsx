import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App bg-whitee">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
