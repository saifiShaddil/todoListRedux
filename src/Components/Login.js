import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/login.css";
import { auth, provider } from "../firebase";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { IconButton } from "@material-ui/core";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault(); //this stop the refresh of page
    //login logic below
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        //logged in ..redirect to home page
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  }

  const googlehandle = () => {
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <section className="login__main">
      <div className="background"></div>
      <p className="login__redirect">
        Not a User{" "}
        <NavLink to="/register">
          Register <ArrowForwardIcon />{" "}
        </NavLink>
      </p>
      <div className="title">
        <h1 className="login__mainTitle">Login to continue</h1>
      </div>
      <form>
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
        <p className="login__redirect">Forget Password ?</p>
        <div className="login__options">
          <IconButton onClick={googlehandle}>
            <img src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" alt="logo" className="google__svg" />
          </IconButton>
        </div>
        <button type="submit" className="form__button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
