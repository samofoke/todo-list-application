import React from "react";
import { Checkbox, ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toDoTask } from "../../Task/task";

interface ItemProps {
  task: toDoTask;
  onEdit: (taskId: string) => void;
  onToggleComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskItems: React.FunctionComponent<ItemProps> = ({
  task,
  onEdit,
  onToggleComplete,
  onDelete,
}) => {
  const handleEditClick = () => {
    onEdit(task.id);
  };

  const handleToggle = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <ListItem>
      <>
        <Checkbox checked={task.completed} onChange={handleToggle} />
        <ListItemText
          id={task.id}
          primary={task.text}
          sx={{ textDecoration: task.completed ? "line-through" : "none" }}
        />
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </>
    </ListItem>
  );
};

export default TaskItems;
