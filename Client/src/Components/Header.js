import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-title">
        <div className="header-name">
          <a href="#">Jye Doepel</a>
        </div>
        <div className="header-positionTitle">
          <a href="#">/Software Engineer</a>
        </div>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resume</a></li>
        </ul>

      </nav>
      <a className="header-contact" href="#"><button>Contact</button></a>
    </header>
  )
}

export default Header;
