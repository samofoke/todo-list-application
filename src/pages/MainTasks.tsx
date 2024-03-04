import React, { useState, useEffect } from "react";
import { toDoTask } from "../Task/task";
import AddTaskForm from "../components/AddTaskForm/AddTask";

const MainTasks: React.FunctionComponent = () => {
  const handleAddTask = (newTask: toDoTask) => {
    console.log("new: ", newTask);
  };
  return (
    <>
      <h1>My Todo List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
    </>
  );
};

export default MainTasks;
