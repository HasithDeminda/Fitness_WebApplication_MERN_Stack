import React from "react";

const Header = () => {
  return (
    <div className="Homepage-Container">
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide slide"
              style={{
                background:
                  "url(https://res.cloudinary.com/desnqqj6a/image/upload/v1650173784/home-bg-1_pcwk0e.jpg)",
              }}
            >
              <div className="content">
                <span>be strong, be fit</span>
                <h3>Make yourself stronger than your excuses.</h3>
                <a href="#" className="btn">
                  get started
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
};

export default Header;
