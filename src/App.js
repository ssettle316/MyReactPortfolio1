import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/contact">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
