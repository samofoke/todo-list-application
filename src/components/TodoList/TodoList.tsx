import React from "react";
import { toDoTask } from "../../Task/task";
import { List, ListItem } from "@mui/material";
import TaskItems from "../TaskItem/TaskItem";

interface ListItemProps {
  tasks: toDoTask[];
  // onToggleComplete: (taskId: string) => void;
  // onDelete: (taskId: string) => void;
  // onEdit: (taskId: string) => void;
}

const TodoList: React.FunctionComponent<ListItemProps> = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <TaskItems task={task} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
