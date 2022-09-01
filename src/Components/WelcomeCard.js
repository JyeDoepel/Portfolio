import React from 'react';

function WelcomeCard() {
  return (
    <div className="WelcomeCard">
      <div className="WelcomeCard-hello">
        <h1>Hello</h1>
      </div>
      <a className="WelcomeCard-Resume" href="/resume"><button>Resume</button></a>
      <a className="WelcomeCard-Projects" href="/projects"><button>Projects</button></a>
      <div className="WelcomeCard-p1">
        <p>Hello, I'm Jye, a Software Engineer curently based in Wollongong.</p>
      </div>
      <div className="WelcomeCard-p2">
        <p>I have skills in Python, JavaScript, and SQL.</p>
      </div>
    </div>
  )
}

export default WelcomeCard;
