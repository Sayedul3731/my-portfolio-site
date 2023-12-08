import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";


const Home = () => {
    return (
        <div className="w-full mx-auto font-font-family">
            <Banner></Banner>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;