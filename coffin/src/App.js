import React, { Component } from 'react';

import styles from './App.module.css'

import Main from './container/Main'
import NavBar from './hoc/NavigationBar/NavBar'
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.container}>
          <NavBar/>
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
