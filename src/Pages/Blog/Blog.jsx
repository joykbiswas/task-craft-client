import img1 from "../../assets/time-managment.png";
import img2 from "../../assets/email-task.png";
import img3 from "../../assets/video+conferencing.jpg";
const Blog = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl md:text-5xl font-bold my-16">💡Productivity Hacks</h3>
      </div>

      {/* blog 1 */}
      <div>
        <h5 className="text-3xl font-semibold m-3">
        ⏱️Supercharge Your Focus with TaskCraft is Time Management Tools
        </h5>

        <div className="lg:flex my-7">
          <div className="lg:w-3/5  space-y-3 m-3">
            <p className="text-xl">
              Ditch the endless to-do list and embrace the Pomodoro technique
              with TaskCraft! Learn how to structure your workday in focused
              sprints, conquer distractions, and achieve laser-sharp
              productivity. Unleash the power of the Pomodoro timer and watch
              your tasks melt away like clockwork.
            </p>
            <h2 className="text-2xl font-semibold pt-3">Set Clear Goals</h2>
            <p className="text-xl">
              Define your short-term and long-term goals. This clarity provides
              direction and purpose, making it easier to prioritize tasks and
              allocate time effectively.
            </p>
            <h3 className="text-2xl font-semibold pt-3">
              Create a To-Do List:
            </h3>
            <p className="text-xl">
              Compile a daily to-do list, outlining tasks in order of priority.
              This simple practice helps you stay organized and ensures that
              crucial tasks are addressed promptly.
            </p>
          </div>
          <div className="lg:w-2/5">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      {/* blog 2 */}

      <div>
        <h5 className="text-3xl font-bold m-3">
        📧 Mastering Email Efficiency with TaskCraft Integrations
        </h5>

        <div className="lg:flex my-8 ">
          <div className="lg:w-3/5  space-y-3 m-3">
            <p className="text-xl">
              Drowning in emails? Dive into this post and discover how TaskCraft
              integrations transform your inbox into a productivity powerhouse.
              Unveil hidden features, automated workflows, and seamless task
              creation from emails. No more inbox overload, just pure inbox zen!
            </p>
            <h2 className="text-2xl font-semibold pt-3">
              Set Specific Email Times:
            </h2>
            <p className="text-xl">
              Allocate dedicated time slots for checking and responding to
              emails. Avoid constant email notifications to minimize
              distractions and maintain focus on important tasks.
            </p>
            <h3 className="text-2xl font-semibold pt-3">
              Write Clear and Concise Emails:
            </h3>
            <p className="text-xl">
              Save time for both yourself and your recipients by crafting clear
              and concise emails. Clearly state the purpose, provide necessary
              information, and use bullet points or numbered lists for easy
              readability.
            </p>
          </div>
          <div className="lg:w-2/5">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      {/* blog 3 */}
      <div>
        <h5 className="text-3xl pt-6 font-bold m-3">
        🤝 Boosting Teamwork and Communication with TaskCraft is Collaborative Tools
        </h5>

        <div className="lg:flex my-5 ">
          <div className="lg:w-3/5  space-y-3 m-3">
            <p className="text-xl">
            Break down communication silos and unleash the power of teamwork with TaskCraft! Explore built-in features like real-time updates, shared workspaces, and collaborative boards that break down barriers and build bridges of efficient communication. Watch your team soar to new heights of synergy!
            </p>
            <h2 className="text-2xl font-semibold pt-3">
            Teamwork and Collaboration :
            </h2>
            <p className="text-xl">
            Teamwork is the coordinated effort of individuals working toward a shared goal, leveraging each other is strengths. Collaboration takes teamwork further, emphasizing active participation, idea sharing, and mutual support. Both enhance problem-solving
            </p>
            <h3 className="text-2xl font-semibold pt-3">
              WEffective Problem-Solving:
            </h3>
            <p className="text-xl">
            Teamwork and collaboration enhance problem-solving capabilities. A diverse range of perspectives provides a richer pool of solutions, leading to more innovative and effective outcomes.
            </p>
          </div>
          <div className="lg:w-2/5">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
