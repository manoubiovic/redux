import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ButtonDisplay from "./ButtonDisplay";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";

function Form({ type, formOpen, setFormOpen, todo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Not Done");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "edit" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("Not Done");
    }
  }, [type, todo, formOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
      }
      setFormOpen(false);
    }
    if (type === "edit") {
      if (todo.title !== title || todo.status !== status) {
        dispatch(
          editTodo({
            ...todo,
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
      }
    }
  };
  return (
    formOpen && (
      <div className="wrapper">
        <div className="container">
          <div
            className="closeButton"
            onClick={() => {
              setFormOpen(false);
            }}
          >
            <CloseIcon />
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h1 className="formTitle">
              {type === "add" ? "Add" : "Edit"} Task
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <label htmlFor="type">
              Status
              <select
                id="type"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="Not Done">Not Done</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <div className="buttonContainer">
              <ButtonDisplay size="medium" type="submit" variant="primary">
                {type === "add" ? "Add" : "Edit"}
              </ButtonDisplay>
              <div onClick={() => setFormOpen(false)}>
                <ButtonDisplay size="medium" type="button" variant="secondary">
                  Cancel
                </ButtonDisplay>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Form;
