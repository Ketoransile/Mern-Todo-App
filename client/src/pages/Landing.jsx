import logo from "../assets/logoPink.svg";
import main from "../assets/main.svg";
import backgroundImage from "../assets/backgroundImage.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex max-lg:flex-col lg:pl-32 lg:p-20 lg:gap-12 lg:justify-start  max-lg:items-center  ">
          {/* <p className=" text-xl text-slate-900 pt-20 pl-32 "> */}
          <div className="flex flex-col gap-9 max-lg:items-center">
            {/* <div className="flex gap-6 pt-24 pl-32 items-center"> */}
            <div className="flex gap-6 pt-24  items-center">
              <img src={logo} alt="logo" className="h-12 w-12" />
              <h1 className="text-4xl text-bold text-pink-700 ">Your Notes</h1>
            </div>
            <p className=" text-xl text-slate-500 w-full max-lg:text-center  ">
              Welcome to Your Notes - Your personal space to organize thoughts,
              tasks, and everything in between. Whether you are planning your
              next project, jotting down ideas, or keeping track of daily tasks,
              we have got you covered.
            </p>
            <div className="lg:flex lg:gap-4 lg:pt-14">
              <Link
                to="/register"
                className="text-xl text-white rounded-lg py-2 px-3 bg-pink-500 max-lg:hidden"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="text-xl text-white rounded-lg py-2 px-3 bg-pink-500 max-lg:hidden"
              >
                Login
              </Link>
            </div>
          </div>
          <img
            src={main}
            alt="note image"
            className="h-auto max-lg:h-64 max-w-xs sm:max-w-md lg:max-w-lg"
          />
          <div className="flex gap-4 pt-14">
            <Link
              to="/register"
              className="text-xl text-white rounded-lg py-2 px-3 bg-pink-500 lg:hidden"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-xl text-white rounded-lg py-2 px-3 bg-pink-500 lg:hidden"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
