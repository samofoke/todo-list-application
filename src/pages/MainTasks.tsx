import React from "react";
import AddTaskForm from "../components/AddTaskForm/AddTask";

const MainTasks: React.FunctionComponent = () => {
    const handleAddTask = (newText: string) => {
        console.log("My task", newText)
    }
    return (
        <>
        <h1>My Todo List</h1>
        <AddTaskForm onAddTask={handleAddTask} />
        </>
    )
}

export default MainTasks;