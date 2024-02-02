import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import ProjectsGallery from "../ProjectsGallery/ProjectsGallery";
import Navbar from "../../components/Navbar/Navbar";
import DownloadPdf from "../../components/DownloadPdf/DownloadPdf";
import Experiences from "../../components/Experiences/Experiences";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-font-family">
            <Navbar></Navbar>
            <Banner></Banner>
            <DownloadPdf></DownloadPdf>
            <Link to='/aboutMe'> <AboutMe></AboutMe> </Link>
            <Link to="/skills"> <Skills></Skills> </Link>
            <div id="experience">
                <Experiences></Experiences>
            </div>
            <div id="gallery">
                <ProjectsGallery></ProjectsGallery>
            </div>
        </div>
    );
};

export default Home;