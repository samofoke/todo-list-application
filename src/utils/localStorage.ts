import { toDoTask } from "../Task/task";

const local_key = "tasks";

const saveTasks = (tasks: toDoTask[]): void => {
  localStorage.setItem(local_key, JSON.stringify(tasks));
};

const laodTasks = (): toDoTask[] => {
  try {
    const storedTasks = localStorage.getItem(local_key);
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
  } catch (error) {
    console.error("Error loading tasks: ", error);
  }
  return [];
};

export { saveTasks, laodTasks };
