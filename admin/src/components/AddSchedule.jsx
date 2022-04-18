import React, { useState } from "react";
// import { useHistory } from "react-router";
import axios from "axios";
import "./AddSchedule.scss";

const AddSchedule = () => {
  const [trainerName, setTrainerName] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [startingTime, setStartingTime] = useState("");
  const [endingTime, setEndingTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   let history = useHistory();

  function sendData(e) {
    e.preventDefault();

    const newSchedule = {
      trainerName,
      trainingDate,
      startingTime,
      endingTime,
      title,
      description,
    };

    axios
      .post("http://localhost:8070/schedules/add", newSchedule)
      .then(() => {
        alert("Time Schedule Added Successfully!");
        // setadd(true);
      })
      .catch((res) => {
        alert("Time Schedule Adding Failed!");
        // setaddfail(true);
      });
  }

  return (
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
          <form class="addCountryForm" onSubmit={sendData}>
            <div class="topic">Add Time Schedule</div>
            <div class="input-box">
              <input
                type="text"
                id="CName"
                required
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
  );
};

export default AddSchedule;
