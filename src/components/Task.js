import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../slices/todoSlice";
import Form from "./Form";

function Task({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);

  useEffect(() => {
    if (todo.status === "Done") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      editTodo({
        ...todo,
        status: checked ? "Done" : "Not Done",
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleEdit = () => {
    setEditFormOpen(true);
  };
  return (
    <>
      <div className="item">
        <div className="todoDetails">
          {/* <CheckButton checked={checked} handleCheck={handleCheck} /> */}
          <div className="texts">
            <p
              className={todo.status === "Done" ? "todoText done" : "todoText"}
            >
              {todo.title}
            </p>
            <p className="time">
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div className="icon" onClick={handleDelete}>
            <DeleteIcon />
          </div>
          <div className="icon" onClick={handleEdit}>
            <EditIcon />
          </div>
        </div>
      </div>

      <Form
        type="edit"
        formOpen={editFormOpen}
        setFormOpen={setEditFormOpen}
        todo={todo}
      />
    </>
  );
}

export default Task;
