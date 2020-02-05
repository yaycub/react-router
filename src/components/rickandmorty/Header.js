import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>React and Morty</h1>
    <nav>
      <li><Link to="/">Home</Link></li>
    </nav>
  </header>
);

export default Header;
