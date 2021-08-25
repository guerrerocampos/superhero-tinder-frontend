import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import mockHeros from './mockHeros.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: mockHeros
    }
  }

  render () {
    return (
      <>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={ Home } />
        </Switch>
      </Router>
      <Footer />
      </>
    )
  }
}


export default App;
