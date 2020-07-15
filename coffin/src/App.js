import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import styles from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import Home from './container/Home/Home';

class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <NavBar>
          <Switch>
              <Route path="/" component={Home}/>
              <Route path="/something" exact component={Home}/>
          </Switch>
        </NavBar>
      </div>
    );
  }
}

export default App;
