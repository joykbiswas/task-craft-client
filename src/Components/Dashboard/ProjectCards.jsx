import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectCards = ({ task }) => {
  const {_id, date, description, priority,  title } = task;
  console.log(task);
  return (
    <div>
      <div className=" card bg-base-100 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex">
            <p>{date}</p>
            <p>{priority}</p>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <Link to={`updateTasks/${_id}`}>
            <button className="btn btn-primary">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
