// components/layout/Header.js
import React from 'react';
import Link from 'next/link';
// import styles from '../../styles/header.css'; // Optional if using CSS

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link class="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link class="nav-link" href="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
