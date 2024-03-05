import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container, Box, Grid } from "@mui/material";
import { toDoTask } from "../../Task/task";

interface EditProps {
  task: toDoTask;
  onClose: () => void;
  onSave: (updatedTask: toDoTask) => void;
}

const EditTask: React.FunctionComponent<EditProps> = ({
  task,
  onClose,
  onSave,
}) => {
  const [editText] = useState(task.text);

  const formik = useFormik({
    initialValues: { editTask: editText },
    validationSchema: Yup.object({
      editTask: Yup.string()
        .required("Task cannot be empty.")
        .min(2, "Too Short!")
        .max(50, "A task cannot exceed 50 characters."),
    }),
    onSubmit: (values) => {
      const updatedTask = { ...task, text: values.editTask };
      onSave(updatedTask);
      onClose();
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                label="edit task"
                {...formik.getFieldProps("editTask")}
                error={
                  formik.touched.editTask && Boolean(formik.errors.editTask)
                }
                helperText={formik.touched.editTask && formik.errors.editTask}
              />
            </Grid>
            <Grid item xs={2}>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default EditTask;
