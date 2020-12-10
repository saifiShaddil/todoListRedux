import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import Register from "./Components/Register";
import "./css/app.css";
import Sidebar from "./Components/Sidebar";
import { connect, useDispatch } from "react-redux";
import { SET__USER } from "./actiontype";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App({ user }) {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //logged in user
        dispatch({
          type: SET__USER,
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: SET__USER,
          user: null,
        });
      }
    });

    return () => {
      //any cleanup go in here
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="login">
              <Sidebar />
              <Login />
            </div>
          </Route>
          <Route exact path="/register">
            <div className="register">
              <Sidebar />
              <Register />
            </div>
          </Route>
          {user?.email ? (
            <Route path="/home">
              <Home />
            </Route>
          ) : (
            ""
          )}
          <Redirect to="/home" />
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
