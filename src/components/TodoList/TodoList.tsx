import React from "react";
import { toDoTask } from "../../Task/task";
import { List, Grid, Container } from "@mui/material";
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
    <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
      <Grid container justifyContent="center">
        <Grid item>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoList;
