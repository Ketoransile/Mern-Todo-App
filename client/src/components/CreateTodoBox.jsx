import { useState } from "react";
import { MdAddTask } from "react-icons/md";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateTodoBox = ({ setTodos }) => {
  const navigate = useNavigate();
  const [todoInput, setTodoInput] = useState("");
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };
  const handleSubmitTodo = async () => {
    const trimmedTodo = todoInput.trim();
    if (!trimmedTodo) {
      toast.error("Please Enter todo before submitting");
      return;
    }
    if (trimmedTodo) {
      try {
        const response = await customFetch.post("/notes/create-note", {
          content: trimmedTodo,
        });
        setTodoInput("");
        const newTodo = response.data.note;
        toast.success("Task added successfully");
        setTodos((previous) => [newTodo, ...previous]);
        navigate("/dashboard");
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        setTodoInput("");
      }
    }
  };
  return (
    <div className="flex items-center gap-4 p-4 bg-white dark:bg-darkSlate rounded-md w-96 lg:w-1/3 shadow-xl  ">
      {/* <input
        type="checkbox"
        className="h-6 w-6 rounded-full checked:bg-pink-500 checked:border-pink-500 border-slate-300 border-opacity-50 outline-none"
      /> */}
      <input
        type="text"
        name="content"
        value={todoInput}
        placeholder="Create a new todo . . ."
        className="flex-1 text-slate-500 dark:text-white border-none focus:outline-none focus:ring-0 dark:bg-darkSlate "
        onChange={handleInputChange}
      />
      <MdAddTask
        onClick={handleSubmitTodo}
        className="text-2xl cursor-pointer dark:text-white"
      />
    </div>
  );
};

export default CreateTodoBox;
