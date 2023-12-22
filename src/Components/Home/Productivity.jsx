import img from '../../assets/Boards_2x.png'

const Productivity = () => {
    return (
        <div className="my-16 ">
            <div className="w-3/4 space-y-3 pb-6 m-2" >
                <h3 className="text-4xl font-semibold">A productivity powerhouse</h3>
                <p className="text-3xl font-light">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. </p>
            </div>

            <div className=' lg:flex gap-5 m-3'>
            <div className="lg:w-2/5 space-y-4">
                <div className='border-l-8 rounded-l-xl border border-blue-500 p-3 hover:shadow-blue-300 shadow-xl'>
                    <h4 className='text-2xl'>Boards</h4>
                    <p className='text-xl'>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                </div>
                <div className='border-l-8 rounded-l-xl border border-green-600 p-3 hover:shadow-green-400 shadow-xl'>
                    <h1 className='text-2xl'>Lists</h1>
                    <p  className='text-xl'>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                </div>
                <div  className='border-l-8 rounded-l-xl border border-pink-500 p-3 hover:shadow-pink-400 shadow-xl'>
                    <h3 className='text-2xl'>Cards</h3>
                    <p  className='text-xl'>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                </div>
            </div>
            <div className="lg:w-3/5 py-4">
            <img src={img} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Productivity;