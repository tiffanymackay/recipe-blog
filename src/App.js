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
          <nav className="navbar navbar-expand-lg navbar-light">
            <Navigation />
            </nav>
            <hr className="d-none d-sm-block" />
        </header>
        <main>
        <Switch>
          <Route path="/about" component={About} />
          <Categories defaultRecipes="mousse" />
        </Switch>
        </main>
        <hr className="d-none d-sm-block" />
        <footer className="text-center pb-3">
          <small>
            This website is designed and coded by UX Web and Brand Designer 
              <a href="https://tiffanymackay.com" target="_blank" rel="noreferrer">{' '}
                Tiffany Mackay
              </a>, and is {' '}
              <a href="https://github.com/tiffanymackay/responsive-recipe" target="_blank" rel="noreferrer">
                open-sourced
              </a>.
            <br />© 2021 Tiffany Mackay <div id="edamam-badge" data-color="white"></div>
          </small>
        </footer>
      </div>
     </Router>
  );
}
