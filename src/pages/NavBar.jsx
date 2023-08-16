import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculate">Calculate Your Score</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
