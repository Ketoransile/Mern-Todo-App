import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import backgroundImage from "../assets/backgroundImage.png";
import CreateTodoBox from "../components/CreateTodoBox";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import { createContext, useContext, useState } from "react";
import customFetch from "../utils/customFetch";

const DashboardContext = createContext();
const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const location = useLocation();
  const isChildRoute = location.pathname !== "/dashboard";

  const { user } = useLoaderData();

  return (
    <DashboardContext.Provider value={{ user }}>
      {!isChildRoute ? (
        <div className={`min-h-screen bg-white dark:bg-darkPurple`}>
          <div
            className="h-[33vh]  bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <Header />
            <div className="flex flex-col lg:gap-3 gap-6  justify-center items-center pt-24 ">
              <CreateTodoBox todos={todos} setTodos={setTodos} />
              <TodoList todos={todos} setTodos={setTodos} />
            </div>
          </div>
        </div>
      ) : (
        <div className={`min-h-screen bg-white dark:bg-darkPurple`}>
          <Outlet context={{ user }} />
        </div>
      )}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
