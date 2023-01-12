import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="About-Me" onClick={() => handlePageChange('About-Me')} className={currentPage === 'About-Me' ? 'nav-link current' : 'nav-link'}>About Me</a>
      </li>
      <li className="nav-item">
        <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link current' : 'nav-link'}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link current' : 'nav-link'}>Contact</a>
      </li>
      <li className="nav-item">
        <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link current' : 'nav-link'}>Resumé</a>
      </li>
    </ul>
  );
}

export default Navigation

