import Navigation from "./Navigation"
import './App.css';
import Categories from "./Categories";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <Navigation />
          </nav>
          <hr className="d-none d-sm-block" />
      </header>
      <main>
        <Categories />
      </main>
      <hr className="d-none d-sm-block" />
      <footer className="text-center">
        <small>
          All Images Copyright © Tiffany Mackay, 2021. All Rights Reserved
        </small>
      </footer>
    </div>
  );
}

export default App;
