import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import Schedelu from "./pages/schedelu/Schedelu";
import Settings from "./pages/settings/Settings";
import NotFound from "./pages/notfound/NotFound";
import Teacher from "./pages/Teacher/Teacher";
const appRoutes = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "schedelu", element: <Schedelu /> },
  { path: "login", element: <Login /> },
  { path: "settings", element: <Settings /> },
  { path: "teacher", element: <Teacher /> },
  { path: "*", element: <NotFound />, errorElement: <NotFound /> },
]);

export default appRoutes;
