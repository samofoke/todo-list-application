import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { toDoTask } from "../../Task/task";

interface AddTaskProps {
  onAddTask: (newTask: string) => void;
}

const AddTaskForm: React.FunctionComponent<AddTaskProps> = ({ onAddTask }) => {
  return (
    <>
      <TextField label="Add Task" name="task" />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </>
  );
};

export default AddTaskForm;
