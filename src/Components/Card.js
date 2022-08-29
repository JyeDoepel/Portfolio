import React from 'react';
import Profile from '../Images/profile.jpg'

function Card() {
  return (
    <div className="Card">
      <div>
        <img className="Card-profile" src={Profile} />
      </div>
      <div className="Card-first">
        <a href="#">Jye</a>
      </div>
      <div className="Card-second">
        <a href="#">Doepel</a>
      </div>
      <div className="Card-lineBreak"></div>
      <div className="Card-title">
        <a href="#">Software Engineer</a>
      </div>
      <div className="Card-footer">
        <a href="https://github.com/JyeDoepel">
          <img className="Card-footer-github" src="https://static.wixstatic.com/media/7c88a5_ac17103f9e6f4bd9927cde0519a66b32~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7c88a5_ac17103f9e6f4bd9927cde0519a66b32~mv2.png" />
        </a>
        <a href="https://www.linkedin.com/in/jye-doepel-2b8b26237/">
          <img className="Card-footer-linkedIn" src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" />
        </a>
      </div>
    </div>
  )
}

export default Card;
