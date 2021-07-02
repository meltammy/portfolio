import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Portfolio from '../view/Portfolio'
import Links from '../view/Links'

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/links">
          <Links />
        </Route>
      </Switch>
    </BrowserRouter>);
}
export default Router;