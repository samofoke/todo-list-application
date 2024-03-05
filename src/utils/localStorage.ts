import { toDoTask } from "../Task/task";

const local_key = "tasks";

const saveTasks = (tasks: toDoTask[]): void => {
  try {
    localStorage.setItem(local_key, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to localStorage: ", error);
  }
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
