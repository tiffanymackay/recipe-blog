import Navigation from "./Navigation"
import './App.css';
import Categories from "./Categories";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav class="navbar navbar-expand-lg navbar-light">
            <Navigation />
            </nav>
            <hr className="d-none d-sm-block" />
        </header>
        <main>

        <Switch>
          <Route path="/about" component={About} />
          <Categories recipe="chocolate" />
        </Switch>
        </main>
        <hr className="d-none d-sm-block" />
        <footer className="text-center pb-3">
          <small>
            All Images Copyright © Tiffany Mackay, 2021. All Rights Reserved
          </small>
        </footer>
      </div>
     </Router>
  );
}
