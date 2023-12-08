import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/aboutMe",
      element: <AboutMe></AboutMe>
    },
    {
      path: "/skills",
      element: <Skills></Skills>
    }
  ]);

  export default router;