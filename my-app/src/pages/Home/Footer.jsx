import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a className="links" href="#home">
              home
            </a>
            <a className="links" href="#about">
              about
            </a>
            <a className="links" href="#features">
              features
            </a>
            <a className="links" href="#pricing">
              pricing
            </a>
            <a className="links" href="#trainers">
              trainers
            </a>
            <a className="links" href="#blogs">
              blogs
            </a>
          </div>

          <div className="box">
            <h3>opening hours</h3>
            <p>
              monday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              tuesday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              wednesday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              friday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              saturday : <i> 7:00am - 10:30pm </i>
            </p>
            <p>
              sunday : <i> closed </i>
            </p>
          </div>

          <div className="box">
            <h3>opening hours</h3>
            <p>
              <i className="fas fa-phone"></i> 0112456890
            </p>
            <p>
              <i className="fas fa-phone"></i> 0717078965
            </p>
            <p>
              <i className="fas fa-envelope"></i> fitformula@gmail.com
            </p>
            <p>
              <i className="fas fa-map"></i> Colombo | Sri Lanka
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-pinterest"></a>
            </div>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
              <input
                type="email"
                name=""
                className="email"
                placeholder="enter your email"
                id=""
              />
              <input type="submit" value="subscribe" className="btn" />
            </form>
          </div>
        </div>
      </section>
      <div className="credit">
        &copy; <span>FIT Formula</span> | all rights reserved!{" "}
      </div>
    </div>
  );
};

export default Footer;
