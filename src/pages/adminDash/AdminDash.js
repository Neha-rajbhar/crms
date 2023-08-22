import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./AdminDash.module.css";

function AdminDash() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/allEmploye");
  };

  const handleRedirect1 = () => {
    navigate("/hrView");
  };

  const handleRedirect2 = () => {
    navigate("/getRegularizedHr");
  };

  const handleRedirect3 = () => {
    navigate("/hrViewEmployeSalary");
  };

  const handleRedirect4 = () => {
    navigate("/adminViewHrSalary");
  };
  const handleRedirect5 = () => {
    navigate("/employeAttendenceRegularized");
  };
  const handleRedirect6 = () => {
    navigate("/adminLogin");
  };
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <h1>
          <img src="" />
        </h1>
        <ul>
          <li>
            <button className={style.button} onClick={handleRedirect}>
              Actions
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleRedirect1}>
              HR Actions
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleRedirect2}>
              Regularized Hr Attendance
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleRedirect3}>
              Get Salary of Employee
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleRedirect4}>
              Get Salary of Hr
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleRedirect5}>
              Regularized Employe Attendance
            </button>
          </li>
          <li>
            <button className={style.button} onClick={handleRedirect6}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className={style.msg}>
        <h1>Welcome Admin</h1>
      </div>
    </div>
  );
}

export default AdminDash;
