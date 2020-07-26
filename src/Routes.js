import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './screens/Dashboard/Index';
import Clients from './screens/Clients/Index';
import NewClient from './screens/Clients/New';





const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/clients' component={Clients} />
      <Route exact path='/clients/new' component={NewClient} />
      <Route exact path='*' component={() => <h1>Erro</h1>} />

    </Switch >
  </BrowserRouter>
);



export default Routes;
