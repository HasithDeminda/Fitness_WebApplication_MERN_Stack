import React, { useState, useEffect } from "react";
import axios from "axios";

const DailyPosts = () => {
  const [students, setStudents] = useState([
    {
      trainerName: "",
      trainingDate: "",
      startingTime: "",
      endingTime: "",
      title: "",
      description: "",
    },
  ]);

  useEffect(() => {
    function getDetails() {
      axios

        .get("http://localhost:8070/schedules/all")

        .then((res) => {
          console.log(res.data);

          setStudents(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getDetails();
  }, []);
  return (
    <div className="Homepage-Container">
      <section className="blogs" id="schedule">
        <h1 className="heading">
          <span>Daily Schedule</span>
        </h1>

        <div className="swiper blogs-slider">
          <div
            className="swiper-wrapper"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {students?.reverse().map((item) => (
              <div
                className="swiper-slide slide"
                style={{ maxWidth: "300px", margin: "20px 20px" }}
              >
                <div className="content">
                  <div className="link">
                    <a href="#">by {item.trainerName}</a> <span>|</span>
                    <a href="#">{item.trainingDate}</a>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="link">
                    <a href="#">Start : {item.startingTime}</a> <span>|</span>
                    <a href="#">Ends :{item.endingTime}</a>
                  </div>
                  <a href="#" className="btn">
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>
    </div>
  );
};

export default DailyPosts;
