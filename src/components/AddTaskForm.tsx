import React from "react";


interface AddTaskFormProps {
    addTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({addTask}) => {
    return (
        <button type={"button"} onClick={addTask}>Add</button>
    );
};

export default AddTaskForm;