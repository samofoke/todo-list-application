import React, { useState } from "react";
import { Checkbox, ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toDoTask } from "../../Task/task";

interface ItemProps {
  task: toDoTask;
  onEdit: (taskId: string) => void;
  //   onToggleComplete: (taskId: string) => void;
  //   onDelete: (taskId: string) => void;
}

const TaskItems: React.FunctionComponent<ItemProps> = ({ task, onEdit }) => {
  const handleEditClick = () => {
    onEdit(task.id);
  };
  return (
    <ListItem>
      <>
        <Checkbox />
        <ListItemText id={task.id} primary={task.text} />
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </>
    </ListItem>
  );
};

export default TaskItems;
