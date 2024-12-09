import { Link, useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const UserMenu = ({ onClick, user }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    onClick();
  };
  const handleLogout = async () => {
    try {
      await customFetch.get("/auth/logout");
      toast.success(t("logoutSuccessMessage"));
      return navigate("/");
    } catch (error) {
      toast.error(t("logoutFailMessage"));
      return onClick();
    }
  };
  return (
    <div
      className="lg:static lg:bg-white lg:rounded-md lg:py-4 lg:px-2 lg:shadow-md lg:w-52 
               fixed inset-0 lg:dark:border-2 lg:dark:bg-opacity-100  bg-black dark:bg-darkPurple bg-opacity-20 dark:bg-opacity-10 backdrop-blur-sm  flex justify-center items-center z-50"
    >
      <IoArrowBackCircleSharp
        onClick={handleGoBack}
        // className="lg:hidden absolute top-8 left-8 text-4xl text-pink-600"
        className="lg:hidden absolute top-8 left-8 text-4xl text-lightPurple"
      />
      {/* <div
        className="flex flex-col items-center gap-4 lg:bg-white bg-none rounded-md py-6 px-4 shadow-md 
                 lg:py-4 lg:px-2 lg:w-full w-72"
      > */}
      <div
        className="flex flex-col items-center gap-4  rounded-md py-6 px-4 
                 lg:py-4 lg:px-2 lg:w-full w-72"
      >
        <h2 className="text-lg text-lightPurple font-bold pb-8 lg:pb-2">
          {t("hiText")} {user.username}
        </h2>
        <Link
          to="/dashboard/current-user"
          className="text-white dark:text-black text-lg w-full text-center bg-slate-600 dark:bg-white rounded-md py-2 px-2"
          onClick={onClick}
        >
          {t("modifyText")}
        </Link>
        <button
          // className="text-white text-lg rounded-md w-full bg-pink-500 font-bold px-2 py-2"
          className="text-white text-lg rounded-md w-full bg-lightPurple font-bold px-2 py-2"
          onClick={handleLogout}
        >
          {t("logoutText")}
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
