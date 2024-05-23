import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "../Assets/email.svg";
import person_icon from "../Assets/person.svg";
import lock_icon from "../Assets/lock.svg";
import logo from "../Assets/stars.svg";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
      <div className="logo"><img src={logo} height={100} width={130}></img></div>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person_icon} height={30} width={30} alt="" />
            <input type="name" placeholder="Full name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} height={30} width={30} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={lock_icon} height={30} width={30} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgotten your password? <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
