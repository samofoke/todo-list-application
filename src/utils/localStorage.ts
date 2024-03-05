import { toDoTask } from "../Task/task";

const local_key = "tasks";

const saveTasks = (tasks: toDoTask[]): void => {
  localStorage.setItem(local_key, JSON.stringify(tasks));
};

const laodTasks = (): toDoTask[] => {
  const storedTasks = localStorage.getItem(local_key);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

export { saveTasks, laodTasks };