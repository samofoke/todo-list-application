import React, { useState, useEffect } from "react";
import { toDoTask } from "../Task/task";
import { Dialog, Typography, Container, DialogContent } from "@mui/material";
import AddTaskForm from "../components/AddTaskForm/AddTask";
import { saveTasks, laodTasks } from "../utils/localStorage";
import TodoList from "../components/TodoList/TodoList";
import EditTask from "../components/EditTask/EditTask";

const MainTasks: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<toDoTask[]>(laodTasks());
  const [editTask, setEdittask] = useState<string | null>(null);
  const [isOpen, setOpen] = useState(false);

  const handleAddTask = (newTask: toDoTask) => {
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
    const updatedTaks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTaks);
    saveTasks(updatedTaks);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleComplete = (taskId: string) => {
    const updateTogle = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updateTogle);
    saveTasks(updateTogle);
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    saveTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <Container maxWidth="md" sx={{ marginTop: "60px" }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        My Todo List
      </Typography>
      <AddTaskForm onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onEdit={handleEdit}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
      <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
        <DialogContent sx={{ minWidth: "400px" }}>
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
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default MainTasks;
