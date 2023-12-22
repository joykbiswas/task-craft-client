import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Benefit = () => {
  return (
    <div>
      
      {/* card section */}
      <div>
      <div className=" m-3 p-3">
        <div className="py-3">
          <h2 className="text-3xl md:text-5xl font-bold ">Find Your Perfect TaskCraft Match!</h2>
         
        </div>
        <div className=" md:flex md:justify-between gap-5 space-y-4">
          {/* 1st card */}

          <div className="w-full mt-4 max-w-sm p-4 bg-slate-600  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            
            <div className=" items-baseline text-white dark:text-white">
              <p className="text-3xl font-extrabold tracking-tight">
              🖥️ The Developer
              </p>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className=" text-white text-5xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Streamlined task management with Kanban boards and drag-and-drop functionality.
                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="  text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Code snippets integration and version control tracking.
                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Focus mode for distraction-free coding sessions.
                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Real-time collaboration with teammates on projects.
                </span>
              </li>
             
              {/* ... (repeat for other unmark list items) ... */}

            </ul>
            <button
              type="button"
              className=" bg-white text-black hover:bg-[#5f99fc] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>

          {/* 2nd card */}
          <div className="w-full max-w-sm p-4 bg-[#5f99fc] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            
            <div className=" items-baseline text-white dark:text-white">
             <p className="text-3xl font-extrabold tracking-tight">
             📊 The Corporate Professional
             </p>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-5xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Collaborative project management tools with shared workspaces and timelines.                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Streamlined communication with task comments, mentions.</span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Automated workflows for repetitive tasks and improved efficiency.                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Priority setting and deadline alerts for focused execution.                </span>
              </li>
             
              {/* ... (repeat for other unmark list items) ... */}

            </ul>
            <button
              type="button"
              className="text-black bg-[#fbc2eb] hover:bg-slate-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>

          {/* 3rd card */}
          <div className="w-full max-w-sm p-4 bg-slate-600 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            
            <div className=" items-baseline text-white dark:text-white">
              <p className="text-3xl font-extrabold tracking-tight">
              📈 The Banker
              </p>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Secure and encrypted data storage for financial information.                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Budget tracking and analytics tools for informed financial decisions.                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Goal setting and progress visualization for achieving financial goals.
                </span>
              </li>
              <li className="flex items-center">
                <IoMdCheckmarkCircleOutline className="text-white text-3xl"></IoMdCheckmarkCircleOutline>
                <span className="text-base font-normal leading-tight text-white dark:text-gray-400 ms-3">
                Project management features for team-based financial projects.                </span>
              </li>

            </ul>
            <button
              type="button"
              className=" text-black bg-white hover:bg-[#5f99fc] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Benefit;
