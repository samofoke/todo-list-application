import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";
import { toDoTask } from "../../Task/task";

interface AddTaskProps {
  onAddTask: (newTask: toDoTask) => void;
}

const AddTaskForm: React.FunctionComponent<AddTaskProps> = ({ onAddTask }) => {
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema: Yup.object({
      task: Yup.string()
        .required("Task Cannot be empty.")
        .max(50, "A task cannot exceed 50 characters."),
    }),
    onSubmit: (values) => {
      const newTask: toDoTask = {
        id: uuidv4(),
        text: values.task,
        completed: false,
      };
      onAddTask(newTask);
      formik.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField label="Add Task" {...formik.getFieldProps("task")} />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddTaskForm;
