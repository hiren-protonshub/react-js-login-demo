import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const loginData = useSelector((state) => state.LoginReducer.isLoggedIn);

  useEffect(() => {
    console.log("loginData : ", loginData);

    localStorage.setItem('loginData1',loginData);
    const loginStatus = localStorage.getItem('loginData1');
    console.log('loginStatus in Dashboard : ',loginStatus);
  }, []);

  return (
    <div className="mainView">
      <div className="innerView">
        <div className="inputView">
          <div className="loginButton">
            <text className="loginText">Dashboard</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
