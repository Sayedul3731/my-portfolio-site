import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProjectsGallery from "../Pages/ProjectsGallery/ProjectsGallery";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

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
    path: "/blog",
    element: <Blog></Blog>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  }
]);

export default router;