import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-email">
        <div className="footer-emailHeading">
          <a>Email</a>
        </div>
        <div className="footer-emailText">
          <a><small>jye@doepel.com.au</small></a>
        </div>
      </div>

      <div className="footer-follow">
        <div className="footer-followHeading">
          <a>Follow</a>
        </div>
        <div className="footer-followText">
        <a href="https://github.com/JyeDoepel">
          <img className="footer-github" src="https://static.wixstatic.com/media/7c88a5_ac17103f9e6f4bd9927cde0519a66b32~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7c88a5_ac17103f9e6f4bd9927cde0519a66b32~mv2.png" />
        </a>
        <a href="https://www.linkedin.com/in/jye-doepel-2b8b26237/">
          <img className="footer-linkedIn" src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" />
        </a>
        </div>
      </div>
    </div>

  )
}

export default Footer;
