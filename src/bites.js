import Navigation from "./Navigation"
import './App.css';

function Bites() {
  return (
    <div className="bites">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <Navigation />
          </nav>
          <hr className="d-none d-sm-block" />
      </header>
      <main>

      </main>
      <hr className="d-none d-sm-block" />
      <footer className="text-center pb-3">
        <small>
          All Images Copyright © Tiffany Mackay, 2021. All Rights Reserved
        </small>
      </footer>
    </div>
  );
}

export default App;
