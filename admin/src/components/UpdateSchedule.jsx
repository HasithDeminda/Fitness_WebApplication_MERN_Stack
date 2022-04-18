import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateSchedule = () => {
  const [trainerName, setTrainerName] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [endingTime, setEndingTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getUsers();
  }, []);

  let history = useHistory();

  function getUsers() {
    let mounted = true;

    fetch(`http://localhost:8070/schedules/getOneSchedule/${id}`)
      .then((res) => res.json())

      .then((result) => {
        if (mounted) {
          setTrainerName(result.trainerName);

          setTrainingDate(result.trainingDate);

          setStartingTime(result.startingTime);

          setEndingTime(result.endingTime);

          setTitle(result.title);

          setDescription(result.description);
        }
      });

    return () => (mounted = false);
  }

  const submitHandler = (event) => {
    // event.preventDefault();
    const data = {
      trainerName,
      trainingDate,
      startingTime,
      endingTime,
      title,
      description,
    };

    axios
      .patch(`http://localhost:8070/schedules/scheduleUpdate/${id}`, data)
      .then((res) => {
        alert("Schedule Details Updated Successfully!");
        history.push("/all");
        console.log(data);
      })
      .catch((err) => {
        alert("Database Error");
      });
  };

  return (
    <div>
      <div className="addSchedule-Container">
        <div class="container">
          <div class="content">
            <div class="image-box">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650195625/Gym-amico_cl7t4v.png"
                alt=""
              />
            </div>

            {/* <!-- Form Starts here --> */}
            <form class="addCountryForm" onSubmit={submitHandler}>
              <div class="topic">Update Time Schedule</div>
              <div class="input-box">
                <input
                  type="text"
                  id="CName"
                  required
                  value={trainerName}
                  onChange={(e) => {
                    setTrainerName(e.target.value);
                  }}
                />
                <label>Trainer Name</label>
              </div>
              <div class="input-box">
                <input
                  type="date"
                  id="CPopulation"
                  required
                  value={trainingDate}
                  onChange={(e) => {
                    setTrainingDate(e.target.value);
                  }}
                />
                <label>Training Date</label>
              </div>
              <div class="input-box">
                <input
                  type="time"
                  id="CPopulation"
                  required
                  value={startingTime}
                  onChange={(e) => {
                    setStartingTime(e.target.value);
                  }}
                />
                <label>Starting Time</label>
              </div>
              <div class="input-box">
                <input
                  type="time"
                  id="CPopulation"
                  required
                  value={endingTime}
                  onChange={(e) => {
                    setEndingTime(e.target.value);
                  }}
                />
                <label>Ending Time</label>
              </div>
              <div class="input-box">
                <input
                  type="text"
                  id="CName"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <label>Title</label>
              </div>
              <div class="input-box">
                <textarea
                  type="text"
                  id="CName"
                  required
                  value={description}
                  style={{ marginTop: "5px", height: "100px" }}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <label>Description</label>
              </div>

              <div class="input-box" style={{ marginTop: "75px" }}>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSchedule;
