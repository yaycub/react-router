import React from 'react';
import Home from '../containers/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './rickandmorty/Header';
import Detail from '../containers/Detail';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/characters/:id" component={Detail} />
    </Router>
  );
}
  
