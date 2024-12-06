import React from "react";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <button onClick={toggleTheme} className=" p-4 text-2xl ">
//       {theme === "light" ? (
//         <FaMoon className="text-pink-600" />
//       ) : (
//         <IoIosSunny />
//       )}
//     </button>
//   );
// };
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("Current theme:", theme);

  return (
    <button onClick={toggleTheme} className="p-4 text-2xl">
      {theme === "light" ? (
        // <FaMoon className="text-pink-600" />
        <FaMoon className="text-lightPurple" />
      ) : (
        // <IoIosSunny className="text-pink-400" />
        <IoIosSunny className="text-lightPurple" />
      )}
    </button>
  );
};

export default ThemeToggle;
