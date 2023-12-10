import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import ProjectsGallery from "../ProjectsGallery/ProjectsGallery";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-font-family">
            <Navbar></Navbar>
            <Banner></Banner>
            <Link to='/aboutMe'> <AboutMe></AboutMe> </Link>
            <Link to="/skills"> <Skills></Skills> </Link>
            <ProjectsGallery></ProjectsGallery>
        </div>
    );
};

export default Home;