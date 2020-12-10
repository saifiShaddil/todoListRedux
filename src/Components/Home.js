import React, { useState, useEffect } from "react";
import "../css/home.css";
import { connect } from "react-redux";
import TodoListItems from "./TodoListItems";
import { IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { db, auth } from "../firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const Home = ({ user }) => {
  const history = useHistory()
  const [name, setName] = useState();
  const [error, setError] = useState();
  const [list, setList] = useState([]);

  const handletext = (e) => {
    setName(e.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  const addTodo = () => {
    if (name.length !== 0) {
      db.collection("todoList")
        .doc(name)
        .set({
          text: name,
          user: user.email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .catch((err) => console.log(err));

      setName("");
    } else {
      setError(`Cant't add Empty Todo!`);
    }
  };

  const logout = () => {
    auth.signOut()
    history.push('/')
  }

  useEffect(() => {
    db.collection("todoList").onSnapshot((snapshot) => {
      setList(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <div className="home">
        <div className="home__Logout">
          <IconButton style={{ backgroundColor: 'blueviolet'}} onClick={logout}>
            <ExitToAppIcon style={{ color: 'white'}}/>
          </IconButton>
        </div>
        <div className="home__title">
          <Typography variant="h3">Your Todo's</Typography>
          <form className="home__addtodo">
            <input
              className="home__addinput"
              type="text"
              name="name"
              value={name}
              onChange={handletext}
            />
            <IconButton className="home__addbutton" onClick={addTodo}>
              <AddIcon />
            </IconButton>
          </form>
          {error ? (
            <Typography
              className="home__error"
              variant="subtitle2"
              color="secondary"
            >
              {error}
              <span>
                <CloseIcon onClick={handleError} />
              </span>
            </Typography>
          ) : (
            ""
          )}
        </div>
        <div className="todoitems">
          {list.map((item, index) => {
            return (
              <TodoListItems key={index} id={item.user} text={item.text} />
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
