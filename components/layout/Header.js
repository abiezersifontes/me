// components/layout/Header.js
import React from 'react';
import Link from 'next/link';
// import styles from '../../styles/header.css'; // Optional if using CSS

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
