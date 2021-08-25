import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HeroEdit from './pages/HeroEdit';
import HeroIndex from './pages/HeroIndex';
import HeroNew from './pages/HeroNew';
import HeroShow from './pages/HeroShow';
import NotFound from './pages/NotFound';

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
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/heroindex" component={ HeroIndex } />
          <Route path="/heroshow/:id" component={ HeroShow } />
          <Route path="/heronew" component={ HeroNew } />
          <Route path="/heroedit/:id" component={ HeroEdit } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
      <Footer />
      </>
    )
  }
}


export default App;
