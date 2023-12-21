import { FcGoogle } from 'react-icons/fc'

import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location =useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('user location login', location.state);

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
         console.log(result.user);
         const userInfo ={
             email: result.user?.email,
             name: result.user?.displayName
         }
         axiosPublic.post('/users', userInfo)
         .then(res =>{
             console.log(res.data);
             navigate(from, {replace: true});
         })
        })
     }
    return (
        <div>
            <div className="py-3 pl-8">
            <div className="divider"></div>
                <button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle size={32} />
                    Google 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;