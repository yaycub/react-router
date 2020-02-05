import React from 'react';
import Home from '../containers/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './rickandmorty/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
    </Router>
  );
}
  
