import React from "react";

const Trainers = () => {
  return (
    <div>
      {" "}
      <section className="trainers" id="trainers">
        <h1 className="heading">
          {" "}
          <span>expert trainers</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173784/trainer-1_wd12gh.jpg"
              alt=""
            />
            <div className="content">
              <span>expert trainer</span>
              <h3>john deo</h3>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div className="box">
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173786/trainer-2_rzrqxo.jpg"
              alt=""
            />
            <div className="content">
              <span>expert trainer</span>
              <h3>john deo</h3>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div className="box">
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173786/trainer-3_yr3g2h.jpg"
              alt=""
            />
            <div className="content">
              <span>expert trainer</span>
              <h3>john deo</h3>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div className="box">
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173786/trainer-4_wsbfjk.jpg"
              alt=""
            />
            <div className="content">
              <span>expert trainer</span>
              <h3>john deo</h3>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-pinterest"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
