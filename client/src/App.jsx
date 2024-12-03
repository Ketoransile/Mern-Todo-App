import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CurrentUser,
  Dashboard,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
} from "./pages";
import CompleteRegistration from "./pages/CompleteRegistration";
import { completeRegisterAction } from "./actions/completeRegisterAction";
import { loginAction } from "./actions/loginAction";
import dashboardLoader from "./loaders/dashboardLoader";
import updateUserAction from "./actions/updateUserAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "complete-registration",
        element: <CompleteRegistration />,
        errorElement: <Error />,
        action: completeRegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            path: "current-user",
            element: <CurrentUser />,
            action: updateUserAction,

            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
