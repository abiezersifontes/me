// components/layout/Footer.js
import React from 'react';
//import styles from '../../styles/footer.css'; // Optional if using CSS

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
