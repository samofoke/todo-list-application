import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
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
        .max(50, "A task cannot exceed 50 characters."),
    }),
    onSubmit: (values) => {
      const updatedTask = { ...task, text: values.editTask };
      onSave(updatedTask);
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField label="edit task" {...formik.getFieldProps("editTask")} />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default EditTask;
