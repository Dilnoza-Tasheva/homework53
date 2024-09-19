import React from "react";


interface AddTaskFormProps {
    currentTask: string;
    addTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({addTask}) => {
    return (
        <div className="add-task-btn">
            <input type="text" placeholder="Add a new task" value={currentTask}/>
            <button type={"button"} onClick={addTask}>Add</button>
        </div>

    );
};

export default AddTaskForm;