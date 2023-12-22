import { useState } from "react";
import { useEffect } from "react";
import ProjectCards from "./ProjectCards";

const Project = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://task-craft-server-six.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  }, []);
  const TodoTasks = tasks.filter((task) => task.status === "to-do");
  const OngoingTasks = tasks.filter((task) => task.status === "ongoing");
  const CompletedTasks = tasks.filter((task) => task.status === "completed");
  return (
    <div className="bg-slate-200">
      <div className="flex gap-4  pt-8">
      <div className="border border-red-300 p-2 m-2 space-y-3">
        <h2 className="text-2xl text-center bg-red-300 p-2">To Do</h2>
        {TodoTasks.map((task) => (
          <ProjectCards key={task._id} task={task}></ProjectCards>
        ))}
      </div>
      <div className="border border-green-300 p-2 m-2 space-y-3">
        <h2  className="text-2xl text-center bg-green-300 p-2">Ongoing</h2>
        {OngoingTasks.map((task) => (
          <ProjectCards key={task._id} task={task}></ProjectCards>
        ))}
      </div>
      <div className="border border-yellow-300 p-2 m-2 space-y-3">
        <h4 className="text-2xl text-center bg-yellow-300 p-2">Completed</h4>
        {CompletedTasks.map((task) => (
          <ProjectCards key={task._id} task={task}></ProjectCards>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Project;
