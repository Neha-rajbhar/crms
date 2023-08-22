import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./HrDashboard.module.css";
function HrDashboard() {
  const [getRegularizedAttendence, setRegularizedAttendence] = useState([]);

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const loginData =
      JSON.parse(localStorage.getItem("hrLoginCurrentUser")) || [];
    setCurrentUser(loginData);
  }, []);

  const fetchRegularizedAttendence = async () => {
    const response = await axios.get(
      "http://localhost:5000/getRegularizedAttendence"
    );
    setRegularizedAttendence(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    fetchRegularizedAttendence();
  }, []);

  const handleAttendence = async (item) => {
    // console.log(item, "data marked");
    try {
      const response = await axios.post(
        `http://localhost:5000/approveRegularizedAttendence/${item._id}`
      );
      console.log(response.data);
      setRegularizedAttendence();
    } catch (err) {
      console.log(err);
    }
  };
  const handelRedirect = () => {
    navigate("/hrLogin");
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.navbar}>
          <h1>
            <img src="" />
          </h1>
          <ul>
            {currentUser.map((item) => {
              return (
                <>
                  <li>
                    <NavLink
                      className={style.a}
                      to={`/hrProfile/${encodeURIComponent(item._id)}`}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className={style.a}
                      to={`/hrAttendance/${item._id}`}
                    >
                      Attendance
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className={style.a}
                      to={`/hrRegularizedAttendence/${item._id}`}
                    >
                      Regularized Attendance
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink className={style.a} to={`/hrSalary/${item._id}`}>
                      Salary
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className={style.a}
                      to={`/hrChangePassword/${item._id}`}
                    >
                      Change Password
                    </NavLink>
                  </li>
                </>
              );
            })}

            <li>
              {" "}
              <NavLink className={style.a} to="/hrViewEmploye">
                Actions
              </NavLink>
            </li>

            <li>
              {" "}
              <NavLink className={style.a} to="/hrViewEmployeSalary">
                Get Salary of Employe
              </NavLink>
            </li>
            <li>
              <button className={style.button} onClick={handelRedirect}>
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className={style.result}>
          <h1>Regularized Attendance Sent by Employe</h1>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Employee User ID</th>
                <th>Employee Name</th>
                <th>Employee Last Name</th>
                <th>Place of Work</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getRegularizedAttendence?.map((item) => (
                <tr key={item._id}>
                  <td>{item.RegularizedAttendenceDate}</td>
                  <td>{item.employeUserId}</td>
                  <td>{item.employeName}</td>
                  <td>{item.employeLastName}</td>
                  <td>{item.placeOfWorkFullForm}</td>
                  <td>{item.reason}</td>
                  <td>
                    <button onClick={() => handleAttendence(item)}>
                      Approve Attendance
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HrDashboard;
