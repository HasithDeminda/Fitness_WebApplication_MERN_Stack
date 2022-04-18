import React from "react";

const Features = () => {
  return (
    <div>
      {" "}
      <section className="features" id="features">
        <h1 className="heading">
          {" "}
          <span>gym features</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173777/f-img-1_kzjtft.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173778/icon-1_fb2wyu.png"
                alt=""
              />
              <h3>body building</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, atque.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box second">
            <div className="image">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173777/f-img-2_opvpne.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173778/icon-2_oibr52.png"
                alt=""
              />
              <h3>gym for men</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, atque.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173776/f-img-3_mnvpnm.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173778/icon-3_jagqa7.png"
                alt=""
              />
              <h3>gym for women</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, atque.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
