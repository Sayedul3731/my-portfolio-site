import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/aboutMe",
      element: <AboutMe></AboutMe>
    }
  ]);

  export default router;