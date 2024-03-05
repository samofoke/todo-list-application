import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Container, Box, Stack } from "@mui/material";
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
        .min(2, "Too Short!")
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
    <Container maxWidth="md">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column" spacing={2}>
            <TextField
              sx={{ marginRight: "30px" }}
              label="Add Task"
              {...formik.getFieldProps("task")}
              error={formik.touched.task && Boolean(formik.errors.task)}
              helperText={formik.touched.task && formik.errors.task}
            />
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddTaskForm;
