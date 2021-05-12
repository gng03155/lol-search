import React from 'react';
import Find from '../pages/find';
import './styles.ts';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Head from './Header';



function App() {
  return (
    <BrowserRouter>
      <Head />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/find" component={Find} exact></Route>
        <Route component={() => <h2>에러페이지</h2>} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;