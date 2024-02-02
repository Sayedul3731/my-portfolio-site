import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProjectsGallery from "../Pages/ProjectsGallery/ProjectsGallery";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Projects from "../components/Projects/Projects";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/projectsGallery",
      element: <ProjectsGallery></ProjectsGallery>
    },
    {
      path: "/projects",
      element: <Projects></Projects>
    },
    {
      path: "/blog",
      element: <Blog></Blog>
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    }
  ]);

  export default router;