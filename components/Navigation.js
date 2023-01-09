import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="About-Me" onClick={() => handlePageChange('About-Me')}>Home</a>
      </li>
      <li className="nav-item">
        <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>About</a>
      </li>
      <li className="nav-item">
        <a href="#Contact" onClick={() => handlePageChange('Contact')}>Blog</a>
      </li>
      <li className="nav-item">
        <a href="#Resume" onClick={() => handlePageChange('Resume')}>Contact</a>
      </li>
    </ul>
  );
}

export default Navigation

