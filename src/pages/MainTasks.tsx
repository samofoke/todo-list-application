import React, { useState, useEffect } from "react";
import { toDoTask } from "../Task/task";
import AddTaskForm from "../components/AddTaskForm/AddTask";
import { saveTasks, laodTasks } from "../utils/localStorage";

const MainTasks: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<toDoTask[]>(laodTasks());

  const handleAddTask = (newTask: toDoTask) => {
    console.log("new: ", newTask);
    setTasks([...tasks, newTask]);
    saveTasks([...tasks, newTask]);
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <>
      <h1>My Todo List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
    </>
  );
};

export default MainTasks;
