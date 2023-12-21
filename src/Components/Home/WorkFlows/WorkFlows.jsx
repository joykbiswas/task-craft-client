import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import WorkFlowsCards from "./WorkFlowsCards";
// import { FaBookmark, FaStar } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { BiCommand } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
const WorkFlows = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="my-16">
      <div className="m-3">
        <p>TASK CRAFT IN ACTION</p>
        <h3 className="text-2xl md:text-4xl font-semibold">
          Workflows for any project, big or small
        </h3>
      </div>
      {/* card section */}
      <div className="">
        <Carousel
          showDots={true}
          responsive={responsive}
          // customTransition="all .8"
          transitionDuration={1000}
        >
          {/* 1 st card */}
          <div className="m-3 flex">
            <div className="w-full h-80  bg-base-100 hover:shadow-2xl rounded-t-xl border border-rose-300">
              <h1 className=" p-3 bg-red-400 rounded-t-xl ">
                <FaFile className="text-rose-500 text-5xl bg-slate-200 p-2 rounded-xl"></FaFile>
              </h1>
              <div className="card-body">
                <h2 className=" text-2xl">Project Management</h2>
                <p className="text-lg">
                  Keep tasks in order, deadlines on track, and team members
                  aligned with Trello.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="m-3 flex">
            <div className="w-full h-80 bg-base-100 hover:shadow-2xl rounded-t-xl border border-blue-300">
              <h1 className=" p-3 bg-blue-600 rounded-t-xl ">
              
                <SiGooglemeet className="text-blue-700 text-5xl bg-slate-200 p-2 rounded-xl"></SiGooglemeet>
              </h1>
              <div className="card-body">
                <h2 className="text-2xl">Meetings</h2>
                <p className="text-lg">
                Empower your team meetings to be more productive, empowering, and dare we say—fun.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="m-3 flex">
            <div className="w-full h-80 bg-base-100 hover:shadow-2xl rounded-t-xl border border-teal-400">
              <h1 className=" p-3 bg-teal-500 rounded-t-xl ">
                <BiCommand className="text-teal-600 text-5xl bg-slate-200 p-2 rounded-xl"></BiCommand>
              </h1>
              <div className="card-body">
                <h2 className="text-2xl">Onboarding</h2>
                <p className="text-lg">
                Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* 4rd card */}
          <div className="m-3 flex">
            <div className="w-full h-80 bg-base-100 hover:shadow-2xl rounded-t-xl border border-amber-300">
              <h1 className=" p-3 bg-amber-400 rounded-t-xl ">
                <FaListAlt className="text-amber-500 text-5xl bg-slate-200 p-2 rounded-xl"></FaListAlt>
              </h1>
              <div className="card-body">
                <h2 className="text-2xl">Task management</h2>
                <p className="text-lg">
                Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* 5 card */}
          <div className="m-3 flex">
            <div className="w-full h-80 bg-base-100 hover:shadow-2xl rounded-t-xl border border-cyan-300">
              <h1 className=" p-3 bg-cyan-400 rounded-t-xl ">
                <FiDownloadCloud className="text-cyan-500 text-5xl bg-slate-200 p-2 rounded-xl"></FiDownloadCloud>
              </h1>
              <div className="card-body">
                <h2 className="text-2xl">Brainstorming</h2>
                <p className="text-lg">
                Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* 6 card */}
          <div className="m-3 flex">
            <div className="w-full h-80 bg-base-100 hover:shadow-2xl rounded-t-xl border border-fuchsia-300">
              <h1 className=" p-3 bg-fuchsia-400 rounded-t-xl ">
                <FaBook className="text-fuchsia-500 text-5xl bg-slate-200 p-2 rounded-xl"></FaBook>
              </h1>
              <div className="card-body">
                <h2 className="text-2xl">Resource hub</h2>
                <p className="text-lg">
                Save time with a well-designed hub that helps teams find information easily and quickly.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>

          {/* <div className="m-4 group">
            <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
              <div className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition ">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>

              <div className=" ">
                <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
                  <p className="text-2xl text-blue-600 font-bold ">
                    <FaBookmark className="hover:text-pink-500" />
                  </p>
                </div>
              </div>

              <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
                <h2 className="card-title">
                  <FaStar className="text-blue-600" />4
                </h2>
              </div>

              <div className=" relative ">
                <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-3xl">
                  {name}
                </h2>
                <div className="flex flex-row gap-8 ml-5">
                  <h5 className="text-gray-400 mb-4 text-xl">new</h5>
                  <h5 className="text-gray-400 mb-4 text-xl">dd</h5>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="m-4 group">
            <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
              <div className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition ">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>

              <div className=" ">
                <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
                  <p className="text-2xl text-blue-600 font-bold ">
                    <FaBookmark className="hover:text-pink-500" />
                  </p>
                </div>
              </div>

              <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
                <h2 className="card-title">
                  <FaStar className="text-blue-600" />4
                </h2>
              </div>

              <div className=" relative ">
                <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-3xl">
                  {name}
                </h2>
                <div className="flex flex-row gap-8 ml-5">
                  <h5 className="text-gray-400 mb-4 text-xl">new</h5>
                  <h5 className="text-gray-400 mb-4 text-xl">dd</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4 group">
            <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
              <div className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition ">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>

              <div className=" ">
                <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
                  <p className="text-2xl text-blue-600 font-bold ">
                    <FaBookmark className="hover:text-pink-500" />
                  </p>
                </div>
              </div>

              <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
                <h2 className="card-title">
                  <FaStar className="text-blue-600" />4
                </h2>
              </div>

              <div className=" relative ">
                <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-3xl">
                  {name}
                </h2>
                <div className="flex flex-row gap-8 ml-5">
                  <h5 className="text-gray-400 mb-4 text-xl">new</h5>
                  <h5 className="text-gray-400 mb-4 text-xl">dd</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4 group">
            <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
              <div className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition ">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>

              <div className=" ">
                <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
                  <p className="text-2xl text-blue-600 font-bold ">
                    <FaBookmark className="hover:text-pink-500" />
                  </p>
                </div>
              </div>

              <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
                <h2 className="card-title">
                  <FaStar className="text-blue-600" />4
                </h2>
              </div>

              <div className=" relative ">
                <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-3xl">
                  {name}
                </h2>
                <div className="flex flex-row gap-8 ml-5">
                  <h5 className="text-gray-400 mb-4 text-xl">new</h5>
                  <h5 className="text-gray-400 mb-4 text-xl">dd</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4 group">
            <div className="relative grid h-72 w-full rounded-xl items-end justify-center overflow-hidden text-center">
              <div className=" absolute inset-0 m-0 w-full rounded-none group-hover:scale-110 transition ">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>

              <div className=" ">
                <div className="group-hover:flex hidden absolute top-0 left-2   justify-between bg-gray-400 p-1 rounded-lg mt-4">
                  <p className="text-2xl text-blue-600 font-bold ">
                    <FaBookmark className="hover:text-pink-500" />
                  </p>
                </div>
              </div>

              <div className=" group-hover:flex hidden absolute top-0 right-2 text-white justify-between bg-gray-400 p-1 rounded-lg mt-4">
                <h2 className="card-title">
                  <FaStar className="text-blue-600" />4
                </h2>
              </div>

              <div className=" relative ">
                <h2 className=" bottom-0 left-0 group-hover:text-blue-500 text-white mb-6 font-medium leading-[1.5] text-3xl">
                  {name}
                </h2>
                <div className="flex flex-row gap-8 ml-5">
                  <h5 className="text-gray-400 mb-4 text-xl">new</h5>
                  <h5 className="text-gray-400 mb-4 text-xl">dd</h5>
                </div>
              </div>
            </div>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default WorkFlows;
