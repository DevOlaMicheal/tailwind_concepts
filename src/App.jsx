import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App bg-whitee font-montserrat">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/details/:id">
            <BlogDetails />
          </Route>
        </Switch>
      {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
