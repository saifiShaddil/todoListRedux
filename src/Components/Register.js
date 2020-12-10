import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/register.css";
import { auth } from "../firebase";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    // register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        //create a user and logged in ..redirect to home page
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  }
  return (
    <section className="register__main">
      <div className="background"></div>
      <p className="register__redirect">
        Already a User
        <NavLink to="/">
          Login <ArrowForwardIcon />
        </NavLink>
      </p>
      <div className="title">
        <h1 className="register__mainTitle">Register</h1>
      </div>
      <form onSubmit={handleRegister}>
        <div className="form__input">
          <EmailIcon color="primary" />
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__input">
          <LockIcon color="primary" />
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button type="submit" className="form__button">
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
