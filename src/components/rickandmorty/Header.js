import React from 'react';
import styles from './styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <h1>React and Morty</h1>
    <nav>
      <li><Link to="/" className={styles.Link}>Home</Link></li>
    </nav>
  </header>
);

export default Header;
