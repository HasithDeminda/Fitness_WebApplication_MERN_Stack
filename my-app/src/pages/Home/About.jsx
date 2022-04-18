import React from "react";

const About = () => {
  return (
    <div className="Homepage-Container">
      <section className="about" id="about">
        <div className="image">
          <img
            src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173789/about-img_lveax8.jpg"
            alt=""
          />
        </div>

        <div className="content">
          <span>about us</span>
          <h3 className="title">Every day is a chance to become better</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At sint
            fugit harum culpa officia nostrum delectus, modi atque recusandae,
            numquam iusto totam. Dignissimos eum dolores nemo cumque, temporibus
            dolorum nulla.
          </p>
          <div className="box-container">
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>body and mind
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>healthy life
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>strategies
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i>workout
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                enim.
              </p>
            </div>
          </div>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
