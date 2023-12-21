
import img1 from '../../assets/time-managment.png'
import img2 from '../../assets/email-task.png'
import img3 from '../../assets/video+conferencing.jpg'
const Blog = () => {
    return (
        <div>

            {/* blog 1 */}
            <div className="lg:flex my-14">
                <div className="lg:w-3/5  space-y-3 m-3">
                    <h3 className="text-4xl font-bold pb-8">Productivity Hacks</h3>
                    <h5 className="text-3xl font-semibold"> Supercharge Your Focus with TaskCraft is Time Management Tools</h5>
                    <p className="text-xl"> Ditch the endless to-do list and embrace the Pomodoro technique with TaskCraft! Learn how to structure your workday in focused sprints, conquer distractions, and achieve laser-sharp productivity. Unleash the power of the Pomodoro timer and watch your tasks melt away like clockwork.</p>
                    <h2 className="text-2xl font-semibold pt-3">Set Clear Goals</h2>
                    <p className="text-xl">Define your short-term and long-term goals. This clarity provides direction and purpose, making it easier to prioritize tasks and allocate time effectively.</p>
                    <h3 className='text-2xl font-semibold pt-3'>Create a To-Do List:</h3>
                    <p className="text-xl">Compile a daily to-do list, outlining tasks in order of priority. This simple practice helps you stay organized and ensures that crucial tasks are addressed promptly.</p>

                </div>
                <div className="lg:w-2/5">
                    <img src={img1} alt="" />
                </div>
            </div>
            {/* blog 2 */}

            <div className="lg:flex my-14">
                <div className="lg:w-3/5  space-y-3 m-3">
                
                    <h5 className="text-2xl font-semibold"> Mastering Email Efficiency with TaskCraft Integrations</h5>
                    <p className="text-xl">Drowning in emails? Dive into this post and discover how TaskCraft integrations transform your inbox into a productivity powerhouse. Unveil hidden features, automated workflows, and seamless task creation from emails. No more inbox overload, just pure inbox zen!</p>
                    <h2 className="text-2xl font-semibold pt-3">Set Specific Email Times:</h2>
                    <p className="text-xl">Allocate dedicated time slots for checking and responding to emails. Avoid constant email notifications to minimize distractions and maintain focus on important tasks.</p>
                    <h3 className='text-2xl font-semibold pt-3'>Write Clear and Concise Emails:</h3>
                    <p className="text-xl">Save time for both yourself and your recipients by crafting clear and concise emails. Clearly state the purpose, provide necessary information, and use bullet points or numbered lists for easy readability.</p>

                </div>
                <div className="lg:w-2/5">
                    <img src={img2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Blog;