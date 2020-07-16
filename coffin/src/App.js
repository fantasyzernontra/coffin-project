import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import styles from './App.module.css'
import NavBar from './hoc/NavigationBar/NavBar'
import Home from './container/Home/Home';
import Test from './container/Test';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.container}>
          <NavBar>
            <Route path="/" exact component={Home} />
            <Route path="/modern" component={Test} />
          </NavBar>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
