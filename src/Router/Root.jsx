import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import { ToastContainer } from "react-toastify";


const Root = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('/login', ) || location.pathname.includes('/signup')
    return (
        <div className="max-w-screen-xl mx-auto">
            { noHeaderFooter|| <Navbar></Navbar>}
            <Outlet></Outlet>
            <ToastContainer />
           
        </div>
    );
};

export default Root;