// import { MdDelete } from "react-icons/md";
// import customFetch from "../utils/customFetch";
// import { toast } from "react-toastify";
// import { redirect } from "react-router-dom";
// import { useEffect, useState } from "react";

// const Todo = ({ todo, setTodos }) => {
//   // console.log(todo._id);
//   const [isChecked, setIsChecked] = useState(!todo.active);
//   const [todoIsActive, setTodoIsActive] = useState(true);

//   useEffect(() => {
//     setIsChecked(false);
//   }, [todo]);
//   const handleCheckboxClick = async () => {
//     const checkboxStatus = !isChecked;
//     setIsChecked(checkboxStatus);
//     try {
//       await customFetch.patch(`/notes/update-note/${todo._id}`, {
//         active: !todoIsActive,
//       });
//       todoIsActive === true
//         ? toast.success("Note Marked as Completed Successfully")
//         : toast.success("Note marked as Active Successfully");
//       setTodoIsActive(!todoIsActive);
//     } catch (error) {
//       console.error("error occurred updating the note", error);
//       toast.error(error?.response?.data?.msg);
//     }
//     return redirect("/dashboard");
//   };

//   const handleDeleteTodo = async () => {
//     try {
//       const deletedNote = await customFetch.delete(`/notes/${todo._id}`);
//       if (deletedNote) {
//         setTodos((existingTodos) =>
//           existingTodos.filter((t) => t._id !== todo._id)
//         );
//       }
//       toast.success("Todo deleted Successfully");
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//     }
//     return redirect("/dashboard");
//   };

//   return (
//     <div className="flex justify-between gap-2 lg:gap-4 pb-2 border-b-2 border-b-slate-200  w-full">
//       <input
//         type="checkbox"
//         checked={isChecked}
//         id={todo._id}
//         className="h-6 w-6 rounded-full "
//         onChange={handleCheckboxClick}
//       />
//       <label
//         htmlFor={todo._id}
//         className={`  w-full ${
//           isChecked ? "line-through text-slate-500" : "text-slate-800"
//         }`}
//       >
//         {todo.content}
//       </label>
//       <MdDelete
//         onClick={handleDeleteTodo}
//         className="text-2xl cursor-pointer"
//       />
//     </div>
//   );
// };

// export default Todo;
import { MdDelete } from "react-icons/md";

const Todo = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between gap-2 lg:gap-4 pb-2 border-b-2 border-b-slate-200 w-full">
      <input
        type="checkbox"
        checked={!todo.active} // Checkbox is checked if todo is not active (completed)
        id={todo._id}
        className="h-6 w-6 rounded-full"
        onChange={onToggle} // Call the onToggle function passed from TodoList
      />
      <label
        htmlFor={todo._id}
        className={`w-full ${
          !todo.active ? "line-through text-slate-500" : "text-slate-800"
        }`}
      >
        {todo.content}
      </label>
      <MdDelete onClick={onDelete} className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Todo;
