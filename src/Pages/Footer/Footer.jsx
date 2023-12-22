import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "../../assets/TaskCraft_log.png";
const Footer = () => {
  return (
    <div className="my-12">
      <footer className="bg-base-200 p-10">
        <div className="footer   text-base-content">
          <aside>
            <img className="w-56" src={logo} alt="logo" />
            <p className="text-xl pt-5">
              <span className="font-bold">Task Craft</span> Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title text-2xl">Services</header>
            <a className="link link-hover text-xl">development</a>
            <a className="link link-hover text-xl">Design</a>
            <a className="link link-hover text-xl">Marketing</a>
            <a className="link link-hover text-xl">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title text-2xl">Company</header>
            <a className="link link-hover text-xl">About us</a>
            <a className="link link-hover text-xl">Contact</a>
            <a className="link link-hover text-xl">Jobs</a>
            <a className="link link-hover text-xl">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title text-2xl">Legal</header>
            <a className="link link-hover text-xl">Terms of use</a>
            <a className="link link-hover text-xl">Privacy policy</a>
            <a className="link link-hover text-xl">Cookie policy</a>
          </nav>
        </div>
        <div>
          <hr className="border border-black my-5" />
          <div className="md:flex justify-between space-y-2">
            <div>
              <h2 className="text-xl">
                © 2023 joy biswas portfolio. All Rights Reserved.
              </h2>
            </div>
            <div className="flex gap-9 text-2xl">
              <a
                href="https://www.facebook.com/joy.kumarbiswas.33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="hover:text-green-300 hover:bg-red-500 rounded-full hover:  hover:rounded-full" />
              </a>
              <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:rounded"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-kumar-biswas-8a432929b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </a>
              <a
                  href="https://github.com/joykbiswas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:rounded-full"/>
                </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
