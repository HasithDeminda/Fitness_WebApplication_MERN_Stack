import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const Report = () => {
  const componentRef1 = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef1.current,
  });

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

  return (
    <div
      style={{
        margin: "20px 50px",
        borderRadius: "20px",
        maxHeight: "700px",
        overflowY: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "200" }}>
        Report of the Schedules
      </h2>
      <button
        className="reportBtn1"
        onClick={handlePrint}
        style={{
          fontSize: "15px",
          marginRight: "100px",
          color: "white",
          borderRadius: "20px",
          border: "none",
          backgroundColor: "green",
          textDecoration: "none",
          padding: "15px",
        }}
      >
        Export Report as a PDF
      </button>

      <table
        style={{ borderCollapse: "collapse", width: "100%" }}
        ref={componentRef1}
      >
        <tr>
          <th
            style={{
              border: "none",
              textAlign: "left",
              padding: "25px 75px",
            }}
          >
            Trainer Name
          </th>
          <th
            style={{
              border: "none",
              textAlign: "left",
              padding: "25px 75px",
            }}
          >
            Scheduled Date
          </th>
          <th
            style={{
              border: "none",
              textAlign: "left",
              padding: "25px 75px",
            }}
          >
            Starting Time
          </th>
          <th
            style={{
              border: "none",
              textAlign: "left",
              padding: "25px 75px",
            }}
          >
            Ending Time
          </th>
        </tr>
        {students?.reverse().map((item) => (
          <tr>
            <td
              style={{
                border: "none",
                textAlign: "left",
                padding: "15px 75px",
              }}
            >
              {item.trainerName}
            </td>
            <td
              style={{
                border: "none",
                textAlign: "center",
                padding: "15px 75px",
              }}
            >
              {item.trainingDate}
            </td>
            <td
              style={{
                border: "none",
                textAlign: "center",
                padding: "15px 75px",
              }}
            >
              {item.startingTime}
            </td>
            <td
              style={{
                border: "none",
                textAlign: "center",
                padding: "15px 75px",
              }}
            >
              {item.endingTime}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Report;
