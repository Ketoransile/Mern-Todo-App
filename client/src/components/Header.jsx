import { useState } from "react";
import logoPink from "../assets/logoPink.svg";
import { FaMoon } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import UserMenu from "./UserMenu";
import { Link, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useDashboardContext } from "../pages/Dashboard";
const Header = () => {
  const { user } = useDashboardContext();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <div className="flex justify-between pt-3 pb-3 pl-8 pr-8 bg-white ">
      <div className="flex gap-3 items-center ">
        <img src={logoPink} alt="logo image" className="h-8 w-8" />
        <Link
          to="/dashboard"
          className=" text-xl  lg:text-3xl text-pink-400 font-bold"
        >
          Your Notes
        </Link>
      </div>
      <div className="flex gap-6 items-center">
        <h1 className="text-pink-400 font-bold text-2xl">Ar</h1>
        <button>
          <FaMoon className="text-pink-500 text-2xl" />
        </button>
        <button onClick={toggleUserMenu}>
          <FaUser className="text-pink-500 text-2xl" />
        </button>
      </div>
      {showUserMenu && (
        <div className="absolute top-12 right-8 mt-4">
          <UserMenu onClick={toggleUserMenu} user={user} />
        </div>
      )}
    </div>
  );
};

export default Header;
