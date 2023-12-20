import Swal from "sweetalert2";
import { useContext, useState } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
// import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  //   const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";
  console.log("user location login", location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User login successful",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // setError('Wrong password')
        setError(error.message);
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Survey Scribe | log in</title>
      </Helmet>
      <div className="my-12 lg:my-16 ">
        <div className=" ">
          <h1 className="text-3xl text-center font-semibold pb-3">
            Please Login now!
          </h1>
          <div className="w-1/2 mx-auto border shadow-lg">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  //   required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <p className="text-red-500">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            {/* <SocialLogin></SocialLogin> */}
            <p className="pb-4 pl-3 md:pl-8">
              <>
                New Here?{" "}
                <Link className="text-red-400" to="/signup">
                  Create an account
                </Link>
              </>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
