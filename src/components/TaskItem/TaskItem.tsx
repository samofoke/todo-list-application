import React, { useState } from "react";
import { Checkbox, ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toDoTask } from "../../Task/task";

interface ItemProps {
  task: toDoTask;
  // onToggleComplete: (taskId: string) => void;
  // onDelete: (taskId: string) => void;
  // onEdit: (taskId: string) => void;
}

const TaskItems: React.FunctionComponent<ItemProps> = ({ task }) => {
  return (
    <ListItem>
      <Checkbox />
      <ListItemText id={task.id} primary={task.text} />
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItems;
