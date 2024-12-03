import { Link, useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const UserMenu = ({ onClick, user }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    onClick();
  };
  const handleLogout = async () => {
    try {
      await customFetch.get("/auth/logout");
      toast.success("Logged Out Successfully");
      return navigate("/");
    } catch (error) {
      toast.error("Logout Failed");
      return onClick();
    }
  };
  return (
    <div
      className="lg:static lg:bg-white lg:rounded-md lg:py-4 lg:px-2 lg:shadow-md lg:w-52 
               fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <IoArrowBackCircleSharp
        onClick={handleGoBack}
        className="lg:hidden absolute top-8 left-8 text-4xl text-pink-600"
      />
      {/* <div
        className="flex flex-col items-center gap-4 lg:bg-white bg-none rounded-md py-6 px-4 shadow-md 
                 lg:py-4 lg:px-2 lg:w-full w-72"
      > */}
      <div
        className="flex flex-col items-center gap-4  rounded-md py-6 px-4 
                 lg:py-4 lg:px-2 lg:w-full w-72"
      >
        <h2 className="text-lg text-pink-800 font-bold pb-8 lg:pb-2">
          Hi {user.username}
        </h2>
        <Link
          to="/dashboard/current-user"
          className="text-white text-lg w-full text-center bg-slate-600 rounded-md py-2 px-2"
          onClick={onClick}
        >
          Modify User Info
        </Link>
        <button
          className="text-white text-lg rounded-md w-full bg-pink-500 font-bold px-2 py-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
