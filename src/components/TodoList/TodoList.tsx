import React from "react";
import { toDoTask } from "../../Task/task";
import { List } from "@mui/material";
import TaskItems from "../TaskItem/TaskItem";

interface ListItemProps {
  tasks: toDoTask[];
  onEdit: (taskId: string) => void;
  onToggleComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TodoList: React.FunctionComponent<ListItemProps> = ({
  tasks,
  onEdit,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItems
          key={task.id}
          task={task}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TodoList;
