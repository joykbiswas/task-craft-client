import { useLoaderData, } from "react-router-dom";

import Swal from "sweetalert2";

const UpdateTasks = () => {
    const task = useLoaderData();
    const {_id, date, description, priority,  title } = task;

  const handleUpdatedTasks = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const description = form.description.value;
    const updatedTask = { title, date, description, priority };
    console.log(updatedTask);
    fetch(`https://task-craft-server-six.vercel.app/tasks/${_id}`,{
        method: 'PUT',
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify(updatedTask)  
    })
    .then((res) =>res.json())
    .then((data) =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "success!",
                text: "tasks update  successfully",
                icon: "success",
                confirmButtonText: "Add Task",
              });
        }
    })
  };
  return (
    <div>
      <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
        <h2 className="text-4xl font-bold text-center pb-12">Update Survey</h2>
        <form onSubmit={handleUpdatedTasks}>
          {/* form row 1*/}
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder=" title here"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                defaultValue={date}
                placeholder=" title here"
                className="input input-bordered w-full "
                required
              />
            </div>
          </div>

          {/* form row 3*/}
          <div className="md:flex mb-7">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>

              <select
                className="select select-bordered join-item"
                type="category"
                name="priority"
                defaultValue={priority}
              >
                <option disabled selected>
                  Option
                </option>
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
                required
              </select>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Enter task description"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
          </div>

          {/* <input type="hidden" name="timestamp" value={new Date().toISOString()} /> */}
          <input
            type="submit"
            value="Add Task"
            className="btn w-full bg-[#f5d789]"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTasks;
