import React from 'react'
import footerLogo from '../assets/images/landing/footer-logo.svg'
import social1 from '../assets/images/landing/social1.svg'
import social2 from '../assets/images/landing/social2.svg'
import social3 from '../assets/images/landing/social3.svg'
import social4 from '../assets/images/landing/social4.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footerSec" id="footer">
    <div className="container">
      <div className="footerSec__top">
        <div>
          <img className="footerSec__logo" src={footerLogo} alt="logo" />
        </div>
        <div>
          <div className="search-product">
            <div className="search-product__inner">
              <input type="text" placeholder="Search your product..." />
              <button><span className="hgt">Search</span></button>
            </div>
          </div>
        </div>
      </div>
      <h3>A cutting-edge Blockchain as a Service</h3>
      <p>Holograf is a cutting-edge Blockchain as a Service (BaaS) and white-label solution that tackles the key issues of counterfeiting, theft, and pilferages in the luxury product supply chain. Through the utilization of blockchain technology and Zero Knowledge Proof integration, Holograf provides a transparent and secure platform for verifying product authenticity, tracking provenance, and enabling smart ownership.</p>
      <div className="footerSec__links bb">
        <h4>SITEMAP</h4>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Holograf</Link></li>
          <li><Link to="/values">Unique Features</Link></li>
          <li><Link to="/why">Why Choose Us</Link></li>
          <li><Link to="/how">How it work?</Link></li>
        </ul>
      </div>
      <div className="footerSec__links">
        <h4>LEGAL</h4>
        <ul>
          <li><Link to="">FAQ</Link></li>
          <li><Link to="">Privacy Policy</Link></li>
          <li><Link to="">Terms and Conditions</Link></li>
          <li><Link to="">Cookies Policy</Link></li>
          <li><Link to="">License Agreement</Link></li>
        </ul>
      </div>
      <div className="footerSec__bottom">
        <div><span className="hgt">2023 copyright.</span></div>
        
        <div className="footerSec__social">
          <Link to=""><img src={social1} /></Link>
          <Link to=""><img src={social2} /></Link>
          <Link to=""><img src={social3} /></Link>
          <Link to=""><img src={social4} /></Link>
        </div>
      </div>
    </div>
  </footer>
  )
}
