import { IconButton } from "@material-ui/core";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import "../css/todolistitems.css";
import { db } from '../firebase'

const TodoListItems = ({ text, id }) => {

  const deleteItem = () => {
    db.collection('todoList').doc(text).delete();
  };

  return (
    <section className="todolistitems">
      <div className="todolistitems__name">
        <h4>{text}</h4>
      </div>
      <div className="todolistitems__crude">
        <IconButton className="todolistitems__clear" onClick={() => deleteItem()}>
          <ClearIcon />
        </IconButton>
      </div>
    </section>
  );
};

export default TodoListItems;
