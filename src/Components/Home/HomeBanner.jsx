const HomeBanner = () => {
  return (
    <div>
      <div className=" bg-cover min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/5YVnk3K/banner-img.png)",
        }}>
        <div className="flex   md:h-[70vh] lg:h-[80vh] ">
          <div className="md:w-3/5 ml-4 lg:ml-6 pt-2 space-y-5 md:pt-3 md:space-y-5 lg:pt-5 lg:space-y-9 flex flex-col   justify-start">
            <h5 className=" text-2xl md:text-5xl font-semibold text-yellow-500 pt-12 md:pt-24 lg:pt-24 ">
            Conquer Chaos, Craft Your Goals
            </h5>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-violet-700 font-bold">
            TaskCraft - Your all-in-one roadmap to productivity and achievement.
            </h2>

            <div className="flex items-center ">
              <button className="rounded-full bg-slate-300 text-blue-700 border  p-4 hover:text-green-600 hover:bg-white">
                Explore Now
              </button>
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
