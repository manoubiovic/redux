import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "All") {
      return true;
    }
    return item.status === filterStatus;
  });
  return (
    <div className="content__wrapper">
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => <Task key={todo.id} todo={todo} />)
      ) : (
        <p className="emptyText">No Tasks Found</p>
      )}
    </div>
  );
}

export default ListTask;
