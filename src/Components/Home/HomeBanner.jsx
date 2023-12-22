import { NavLink } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div>
      <div className=" bg-cover min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/5YVnk3K/banner-img.png)",
        }}>
        <div className="flex   md:h-[70vh] lg:h-[80vh] ">
          <div className="md:w-3/5 ml-4 lg:ml-6 pt-2 space-y-5 md:pt-3 md:space-y-5 lg:pt-5 lg:space-y-9 flex flex-col   justify-start">
            <h5 className=" text-2xl md:text-5xl font-bold text-black pt-12 md:pt-24 lg:pt-24 ">
            Conquer Chaos, Craft Your Goals
            </h5>
            <h2 className="w-11/12 text-xl md:text-2xl lg:text-3xl text-white font-bold">
            TaskCraft - Your all-in-one roadmap to productivity and achievement.
            </h2>

            <div className="flex items-center ">
              <NavLink to="/dashboard">
              <button className="rounded-full text-xl bg-blue-900 text-white border  p-4 hover:text-green-600 hover:bg-white">
               Let's Explore 
              </button>
              </NavLink>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;



/*
<div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/5YVnk3K/banner-img.png)",
        }}
      >
        <div className=" "></div>
        <div className="  ">
          <div className=" border">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate .</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
*/
