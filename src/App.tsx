import AddTaskForm from "./components/AddTaskForm.tsx";
import Task from './components/Task.tsx';
import './App.css'
import React, {useState} from "react";

interface TaskElement {
    id: string;
    task: string;
}

const App: React.FC = () => {

    const [tasks, setTasks] = useState<TaskElement[]>([
        {id: "1", task: "Water the plants"},
        {id: "2", task: "Read a book"},
        {id: "3", task: "Find a good pasta recipe"},
    ]);

    const [currentTask, setCurrentTask] = useState<string>("");

    const addTask = () => {
        if (currentTask !== "") {
            const newTask: TaskElement = {id: Date.now().toString(), task: currentTask};
            setTasks([...tasks, newTask]);
            setCurrentTask("");
        }
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="app">
            <h2>To Do list:</h2>
            <AddTaskForm currentTask = {currentTask} setCurrentTask = {setCurrentTask} addTask = {addTask}/>
            <div className="task-list">
                {tasks.map((task) => (<Task key={task.id} id={task.id} task={task.task} deleteTask={deleteTask} />)

                )}
            </div>

        </div>
    );

};

export default App
