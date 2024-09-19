import AddTaskForm from "./components/AddTaskForm.tsx";
import Task from "./components/Task.tsx";
import './App.css'
import React, {useState} from "react";

interface TaskProps {

}

const App: React.FC = () => {

    const [tasks, setTasks] = useState<TaskElement[]> ([
        {id: "1", task: "Water the plants"},
        {id: "2", task: "Read a book"},
        {id: "3", task: "Find a good pasta recipe"},
    ]);


};

export default App
