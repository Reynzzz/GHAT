// import { Login } from "./pages/login/Login";

import { RouterProvider } from "react-router-dom";
import appRoutes from "./appRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      {
        /* <Login /> */
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={appRoutes} />
        </QueryClientProvider>
      }
    </>
  );
}

export default App;
