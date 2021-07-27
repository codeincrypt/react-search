import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Homepage from "./page/home";

function App() {

  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
