import React, { useState, useEffect } from "react";
import { toDoTask } from "../Task/task";
import { Dialog } from "@mui/material";
import AddTaskForm from "../components/AddTaskForm/AddTask";
import { saveTasks, laodTasks } from "../utils/localStorage";
import TodoList from "../components/TodoList/TodoList";
import EditTask from "../components/EditTask/EditTask";

const MainTasks: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<toDoTask[]>(laodTasks());
  const [editTask, setEdittask] = useState<string | null>(null);
  const [isOpen, setOpen] = useState(false);

  const handleAddTask = (newTask: toDoTask) => {
    console.log("new: ", newTask);
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      saveTasks(updatedTasks);
      return updatedTasks;
    });
  };

  const handleEdit = (taskId: string) => {
    setEdittask(taskId);
    setOpen(true);
  };

  const handleSave = (updatedTask: toDoTask) => {
    console.log("trigger: ", updatedTask);
    const updatedTaks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    console.log("new: ", updatedTask);
    setTasks(updatedTaks);
    saveTasks(updatedTaks);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <>
      <h1>My Todo List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} onEdit={handleEdit} />
      <Dialog open={isOpen} onClose={handleClose}>
        {editTask && (
          <EditTask
            task={
              tasks.find((task) => task.id === editTask) || {
                id: "",
                text: "",
                completed: false,
              }
            }
            onSave={handleSave}
            onClose={handleClose}
          />
        )}
      </Dialog>
    </>
  );
};

export default MainTasks;
