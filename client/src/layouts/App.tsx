import React from 'react';

import Find from '../pages/find';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Head from './Header';

function App() {

  return (
    <BrowserRouter>
      <Head />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/find/userName=:userName" component={Find}></Route>
        <Redirect path="*" to="/" />
        {/* <Route component={() => <h2>에러페이지</h2>} exact></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;