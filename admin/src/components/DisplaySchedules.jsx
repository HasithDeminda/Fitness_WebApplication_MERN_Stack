import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./DisplaySchedules.scss";

const DisplaySchedules = () => {
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

  let history = useHistory();

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

  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:8070/schedules/deleteSchedule/${_id}`)

      .then((res) => {
        alert("User Deleted!");

        history.push("/all");
      })

      .catch();
  }

  return (
    <div className="Display-All-Container">
      <section className="blogs" id="schedule">
        <h1 className="heading">
          <span>Daily Schedules</span>
        </h1>

        <div className="swiper blogs-slider">
          <div
            className="swiper-wrapper"
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {students?.reverse().map((item) => (
              <div
                className="swiper-slide slide"
                style={{
                  maxWidth: "350px",
                  margin: "20px 20px",
                  borderRadius: "35px",
                }}
              >
                <div className="content">
                  <div className="link" style={{ fontSize: "16px" }}>
                    <a href="#">by {item.trainerName}</a> <span>|</span>
                    <a href="#">{item.trainingDate}</a>
                  </div>
                  <h3 style={{ fontSize: "20px" }}>{item.title}</h3>
                  <p style={{ fontSize: "16px" }}>{item.description}</p>
                  <div className="link" style={{ fontSize: "16px" }}>
                    <a href="#">Start : {item.startingTime}</a> <span>|</span>
                    <a href="#">Ends :{item.endingTime}</a>
                  </div>
                  <Link to={`/schedule/${item._id}`}>
                    <a
                      href="#"
                      className="btn"
                      style={{
                        backgroundColor: "green",
                        padding: "10px",
                        borderRadius: "10px",
                        marginRight: "20px",
                        color: "white",
                      }}
                    >
                      Update
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="btn"
                    style={{
                      backgroundColor: "red",
                      padding: "10px",
                      borderRadius: "10px",
                      marginRight: "20px",
                      color: "white",
                    }}
                    onClick={() => deleteHandler(item._id)}
                  >
                    Remove
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

export default DisplaySchedules;
