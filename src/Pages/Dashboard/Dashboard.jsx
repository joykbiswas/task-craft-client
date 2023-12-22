import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdDynamicFeed } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log("user sign out", result);
      })
      .catch((error) => console.error(error));
  };
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
          <li >
            <NavLink to="/" onClick={handleSignOut}>
              <LuLogOut>
              </LuLogOut>
              Sign Out
              
            </NavLink>
          </li>
        </ul>
       
        
      </div>
      <div className="flex justify-end">
          <ul>
            
           
          </ul>
        </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
