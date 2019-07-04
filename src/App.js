import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import { Container } from '@material-ui/core';
import {Route, Router, Switch} from 'react-router-dom';
import history from "./history";

function App() {
  return (
    <div className="main">
      <Container>
          <Router history={history}>
              <Switch>
                  <Route exact path="/:channel" component={Chat} />
              </Switch>
          </Router>
      </Container>
    </div>
  );
}

export default App;
