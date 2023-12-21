import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdDynamicFeed } from "react-icons/md";
import { FaHome } from "react-icons/fa";
const Dashboard = () => {
    
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu p-4 text-lg mt-8">
    
          <li>
            <NavLink to="/dashboard/profile">
              
              <FaUser />
               Users Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/create-task">
              
              <IoIosCreate />
             Create Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/project">
              
              <MdDynamicFeed />
             Project & Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              
              <FaHome />
              Home
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
