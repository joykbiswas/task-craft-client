// import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const CreateTask = () => {
//   const navigate = useNavigate()

  const handleCreateTask = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const description = form.description.value;
    const addTask = { title, date, description, priority };
    console.log(addTask);
    fetch('http://localhost:5000/tasks',{
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify(addTask)  
    })
    .then((res) =>res.json())
    .then((data) =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: "success!",
                text: "user added job successfully",
                icon: "success",
                confirmButtonText: "Add Task",
              });
        }
        // navigate('/')
    })
  };
  return (
    <div>
      <div className="bg-[#fbf3de] max-w-full mx-auto  p-24">
        <h2 className="text-4xl font-bold text-center pb-12">Create Survey</h2>
        <form onSubmit={handleCreateTask}>
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

export default CreateTask;
