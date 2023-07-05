import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <h4>Real Madrid Club</h4>
            <p>Estadio Santiago Bernabéu</p>
            <p>Madrid, Spain</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>Phone: +34 91 398 4300</p>
            <p>Email: info@realmadrid.com</p>
            <p>
              Website: <a href="https://www.realmadrid.com">www.realmadrid.com</a>
            </p>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/RealMadrid">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/realmadrid">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/realmadrid">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/RealMadridCF">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-bottom">
          <p className="footer-text">© 2023 Real Madrid Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
