// components/layout/Header.js
import React from 'react';
import Link from 'next/link';
// import styles from '../../styles/header.css'; // Optional if using CSS

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><Link class="nav-link" href="/">Home</Link></li>
            <li class="nav-item"><Link class="nav-link" href="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
