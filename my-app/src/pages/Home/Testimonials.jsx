import React from "react";

const Testimonials = () => {
  return (
    <div>
      {" "}
      <section className="review">
        <div className="information" style={{ maxWidth: "350px" }}>
          <span>testimonials</span>
          <h3>what our clients says</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            voluptas praesentium asperiores fugiat, excepturi odit obcaecati a
            voluptatibus earum quisquam?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide slide"
              style={{ maxWidth: "300px", margin: "0px 20px" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, quo.
              </p>
              <div className="user">
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173782/pic-1_rtjgcg.png"
                  alt=""
                />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
                <i className="fas fa-quote-left"></i>
              </div>
            </div>

            <div
              className="swiper-slide slide"
              style={{ maxWidth: "300px", margin: "0px 20px" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, quo.
              </p>
              <div className="user">
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173782/pic-2_ehrtrr.png"
                  alt=""
                />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
                <i className="fas fa-quote-left"></i>
              </div>
            </div>

            <div
              className="swiper-slide slide"
              style={{ maxWidth: "300px", margin: "0px 20px" }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus, quo.
              </p>
              <div className="user">
                <img
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173780/pic-3_rwy0qs.png"
                  alt=""
                />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
                <i className="fas fa-quote-left"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
