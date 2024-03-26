import React, { useState } from 'react';
import "./footer.css";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaBehance } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Add smooth scrolling behavior
        });
      };

    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section id="newsletter" className="newsletter flex m-5">
  <div className="container ">
    <div className="hm-footer-details">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4 className="animated-text">information</h4>
            </div>
            <div className="hm-foot-menu">
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">news</a></li>
                <li><a href="#">store</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4 className="animated-text">collections</h4>
            </div>
            <div className="hm-foot-menu">
              <ul>
                <li><a href="#">wooden chair</a></li>
                <li><a href="#">royal cloth sofa</a></li>
                <li><a href="#">accent chair</a></li>
                <li><a href="#">bed</a></li>
                <li><a href="#">hanging lamp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4 className="animated-text">my accounts</h4>
            </div>
            <div className="hm-foot-menu">
              <ul>
                <li><a href="#">my account</a></li>
                <li><a href="#">wishlist</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">order history</a></li>
                <li><a href="#">my cart</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="hm-footer-widget">
            <div className="hm-foot-title">
              <h4 className="animated-text">newsletter</h4>
            </div>
            <div className="hm-foot-para">
              <p>
                Subscribe to get latest news, update and information.
              </p>
            </div>
            <div className="hm-foot-email">
      <div className="foot-email-box">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email Here...."
          onMouseEnter={() => setIsHovered(true)} // Handle mouse enter
          onMouseLeave={() => setIsHovered(false)} // Handle mouse leave
        />
      </div>
      <div className="foot-email-subscribe">
        <span className={isHovered ? 'hovered' : ''}>
          <FaLocationArrow />
        </span>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <footer id="footer" className="footer">
        <div className="container">
          <div className="hm-footer-copyright text-center">
           
            <div className="footer-social">
                    <a href="https://www.facebook.com/"><FaFacebook /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://in.linkedin.com/"><FaLinkedin /></a>
                    <a href="https://in.pinterest.com/"><FaPinterest /></a>
                    <a href="https://www.behance.net/"><FaBehance /></a>
           </div>

           
            <p className='ok'>
              &copy;copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
            </p>
          </div>
        </div>

        <div className="scroll-top-container">
      <div className="return-to-top" onClick={scrollToTop}>
        <FaAngleUp className="scroll-top-icon" />
      </div>
    </div>
      </footer>

      <script src="assets/js/jquery.js"></script>
        
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
		
		
        <script src="assets/js/bootstrap.min.js"></script>
		
		
		<script src="assets/js/bootsnav.js"></script>

		
        <script src="assets/js/owl.carousel.min.js"></script>


		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
		
        
        
        <script src="assets/js/custom.js"></script>
    </>
  );
}

export default Footer;
