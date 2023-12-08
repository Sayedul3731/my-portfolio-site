import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";


const Home = () => {
    return (
        <div className="w-full mx-auto font-font-family">
            <Banner></Banner>
            <Navbar></Navbar>
            <div className=" my-10 flex justify-center items-center gap-10">
                <Link to='/aboutMe'> <AboutMe></AboutMe> </Link>
                <Link to="/skills"> <Skills></Skills> </Link>
            </div>
        </div>
    );
};

export default Home;