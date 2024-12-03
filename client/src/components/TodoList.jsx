// import { useEffect, useState } from "react";
// import { useDashboardContext } from "../pages/Dashboard";
// import customFetch from "../utils/customFetch";
// import Todo from "./Todo";
// import { toast } from "react-toastify";

// // const handleClearCompleted= async()={
// //   try {
// //     await customFetch.delete
// //   } catch (error) {

// //   }
// // }
// const TodoList = ({ todos, setTodos }) => {
//   const [filter, setFilter] = useState("all");

//   const [loading, setLoading] = useState(true);
//   // const notes = await customFetch.get("/notes/get-all-notes");

//   // Use EFfect to fetch all todos
//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const response = await customFetch.get("/notes/get-all-notes");
//         console.log("Notes from TodoList component: ", response.data.notes);
//         setTodos(response.data.notes);
//       } catch (error) {
//         console.error("Error Fetching notes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNotes();
//   }, [setTodos]);
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   // // use Effect to filter active todos
//   // useEffect(() => {
//   //   const filteredActiveTodos = () => {
//   //     try {
//   //       setActiveTodos(todos.filter((t) => t.active === true));
//   //     } catch (error) {
//   //       toast.error("No active todos are there");
//   //     }
//   //   };
//   // });
//   const filteredTodoList = todos.filter((todo) => {
//     if (filter === "all") return true;
//     if (filter === "active") return todo.active;
//     if (filter === "completed") return !todo.active;
//     return true;
//   });
//   return (
//     <>
//       <div className="flex flex-col items-center gap-6 p-4 bg-white rounded-md w-96   lg:w-1/3 shadow-xl">
//         {console.log("TOdos to be rendered are:", todos)}
//         {/* {todos.map((todo) => (
//           <Todo key={todo._id} todo={todo} todos={todos} setTodos={setTodos} />
//         ))} */}
//         {filteredTodoList.map((todo) => (
//           <Todo key={todo._id} todo={todo} todos={todos} setTodos={setTodos} />
//         ))}
//         <div className="flex gap-4 justify-between items-center text-sm text-slate-500 w-full ">
//           <h2>{todos.length} items left</h2>
//           {/* {todos.forEach((todo) => console.log("id of each todo :", todo._id))}; */}
//           <div className="lg:flex gap-3 text-slate-700 max-lg:hidden">
//             <button
//               onClick={() => setFilter("all")}
//               className={filter === "all" ? "text-bold text-pink-700" : ""}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setFilter("active")}
//               className={filter === "active" ? "text-bold text-pink-700" : ""}
//             >
//               Active
//             </button>
//             <button
//               onClick={() => setFilter("completed")}
//               className={
//                 filter === "completed" ? "text-bold text-pink-700" : ""
//               }
//             >
//               Completed
//             </button>
//           </div>
//           <button>Clear Completed</button>
//         </div>
//       </div>
//       <div className="flex gap-4 justify-center text-slate-600 bg-white shadow-lg p-4 w-96   rounded-xl lg:hidden">
//         <button
//           onClick={() => setFilter("all")}
//           className={filter === "all" ? "text-bold text-pink-700" : ""}
//         >
//           All
//         </button>
//         <button
//           onClick={() => setFilter("active")}
//           className={filter === "active" ? "text-bold text-pink-700" : ""}
//         >
//           Active
//         </button>
//         <button
//           onClick={() => setFilter("completed")}
//           className={filter === "completed" ? "text-bold text-pink-700" : ""}
//         >
//           Completed
//         </button>
//       </div>
//     </>
//   );
// };

// export default TodoList;
// import { useEffect, useState } from "react";
// import customFetch from "../utils/customFetch";
// import Todo from "./Todo";
// import { toast } from "react-toastify";

// const TodoList = ({ todos, setTodos }) => {
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const response = await customFetch.get("/notes/get-all-notes");
//         setTodos(response.data.notes);
//       } catch (error) {
//         console.error("Error Fetching notes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchNotes();
//   }, [setTodos]);

//   const handleToggleTodo = async (id) => {
//     const todo = todos.find((t) => t._id === id);
//     if (!todo) return;

//     const updatedStatus = !todo.active;
//     try {
//       await customFetch.patch(`/notes/update-note/${id}`, {
//         active: updatedStatus,
//       });

//       setTodos((prevTodos) =>
//         prevTodos.map((t) =>
//           t._id === id ? { ...t, active: updatedStatus } : t
//         )
//       );

//       toast.success(
//         updatedStatus
//           ? "Note marked as Active successfully"
//           : "Note marked as Completed successfully"
//       );
//     } catch (error) {
//       console.error("Error occurred updating the note", error);
//       toast.error(error?.response?.data?.msg);
//     }
//   };

//   const handleDeleteTodo = async (id) => {
//     try {
//       await customFetch.delete(`/notes/${id}`);
//       setTodos((prevTodos) => prevTodos.filter((t) => t._id !== id));
//       toast.success("Todo deleted successfully");
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//     }
//   };

//   const filteredTodoList = todos.filter((todo) => {
//     if (filter === "all") return true;
//     if (filter === "active") return todo.active;
//     if (filter === "completed") return !todo.active;
//     return true;
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center gap-6 p-4 bg-white rounded-md w-96 lg:w-1/3 shadow-xl">
//       {filteredTodoList.map((todo) => (
//         <Todo
//           key={todo._id}
//           todo={todo}
//           onToggle={() => handleToggleTodo(todo._id)}
//           onDelete={() => handleDeleteTodo(todo._id)}
//         />
//       ))}
//       <div className="flex gap-4 justify-between items-center text-sm text-slate-500 w-full">
//         <h2>{filteredTodoList.length} items left</h2>
//         <div className="lg:flex gap-3 text-slate-700 max-lg:hidden">
//           <button
//             onClick={() => setFilter("all")}
//             className={filter === "all" ? "text-bold text-pink-700" : ""}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setFilter("active")}
//             className={filter === "active" ? "text-bold text-pink-700" : ""}
//           >
//             Active
//           </button>
//           <button
//             onClick={() => setFilter("completed")}
//             className={filter === "completed" ? "text-bold text-pink-700" : ""}
//           >
//             Completed
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoList;
import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import Todo from "./Todo";
import { toast } from "react-toastify";

const TodoList = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await customFetch.get("/notes/get-all-notes");
        setTodos(response.data.notes);
      } catch (error) {
        console.error("Error Fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [setTodos]);

  // Toggle todo active state
  const handleToggleTodo = async (id) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;

    const updatedStatus = !todo.active;
    try {
      await customFetch.patch(`/notes/update-note/${id}`, {
        active: updatedStatus,
      });

      setTodos((prevTodos) =>
        prevTodos.map((t) =>
          t._id === id ? { ...t, active: updatedStatus } : t
        )
      );

      toast.success(
        updatedStatus
          ? "Note marked as Active successfully"
          : "Note marked as Completed successfully"
      );
    } catch (error) {
      console.error("Error updating the note", error);
      toast.error(error?.response?.data?.msg);
    }
  };

  // Delete a specific todo
  const handleDeleteTodo = async (id) => {
    try {
      await customFetch.delete(`/notes/${id}`);
      setTodos((prevTodos) => prevTodos.filter((t) => t._id !== id));
      toast.success("Todo deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  // Clear all completed todos
  const handleClearCompleted = async () => {
    try {
      const completedTodos = todos.filter((todo) => !todo.active);
      if (completedTodos.length === 0) {
        toast.error("No completed todos found");
        return;
      }
      const deleteRequests = completedTodos.map((todo) =>
        customFetch.delete(`/notes/${todo._id}`)
      );
      await Promise.all(deleteRequests);

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.active));
      toast.success("All completed todos cleared successfully");
    } catch (error) {
      console.error("Error clearing completed todos", error);
      toast.error("Failed to clear completed todos.");
    }
  };

  const filteredTodoList = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return todo.active;
    if (filter === "completed") return !todo.active;
    return true;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-4 bg-white rounded-md w-96 lg:w-1/3 shadow-xl">
        {filteredTodoList.map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            onToggle={() => handleToggleTodo(todo._id)}
            onDelete={() => handleDeleteTodo(todo._id)}
          />
        ))}
        <div className="flex gap-4 justify-between items-center text-sm text-slate-500 w-full">
          <h2>{filteredTodoList.length} items left</h2>
          <div className="lg:flex gap-3 text-slate-700 max-lg:hidden">
            <button
              onClick={() => setFilter("all")}
              className={filter === "all" ? "font-bold text-pink-700" : ""}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={filter === "active" ? "font-bold text-pink-700" : ""}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={
                filter === "completed" ? "font-bold text-pink-700" : ""
              }
            >
              Completed
            </button>
          </div>
          <button
            onClick={handleClearCompleted}
            className="text-slate-500 hover:text-slate-700"
          >
            Clear Completed
          </button>
        </div>
      </div>

      <div className="flex gap-4 justify-center text-slate-600 bg-white shadow-lg p-4 w-96 rounded-xl lg:hidden">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "font-bold text-pink-500" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? "font-bold text-pink-500" : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "font-bold text-pink-500" : ""}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default TodoList;
