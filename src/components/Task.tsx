import React from "react";


interface TaskProps {
    task: string;
    id: string;
    deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({id, task, deleteTask}) => {
    return (
        <div className="task">
            <span>{task}</span>
            <button onClick={() => deleteTask(id)}>Delete</button>
        </div>
    );
};

export default Task;