// import { Login } from "./pages/login/Login";

import { RouterProvider } from "react-router-dom";
import appRoutes from "./appRoutes";

function App() {
  return (
    <>
      {
        /* <Login /> */

        <RouterProvider router={appRoutes} />
      }
    </>
  );
}

export default App;
