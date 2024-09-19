import React from "react";


interface AddTaskFormProps {
    currentTask: string;
    addTask: () => void;
    setCurrentTask: (task: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({currentTask, addTask, setCurrentTask}) => {
    return (
        <div className="add-task-btn">
            <input type="text" placeholder="Add a new task" value={currentTask} onChange={(e) => setCurrentTask(e.target.value) }/>
            <button type="button" onClick={addTask}>Add</button>
        </div>

    );
};

export default AddTaskForm;