import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import RouterPortfolio from './routes/Portfolio.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/portfolio">
          <RouterPortfolio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
