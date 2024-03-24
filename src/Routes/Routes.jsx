import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
   
      {
        path: "/",
        element: <h1>Home....</h1>
      },
      {
        path: "/donation",
        element: <h1>Donation....</h1>
      },
      {
        path: "/statistics",
        element: <h1>Statistics....</h1>
      }
    ]
  },

]);

export default router;