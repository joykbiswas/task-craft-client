import { useState } from "react";
import { useEffect } from "react";
import ProjectCards from "./ProjectCards";

const Project = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/tasks')
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            setTasks(data)
        })
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              tasks.map(task=><ProjectCards key={task._id} task={task}></ProjectCards>)      
            }
        </div>
    );
};

export default Project;