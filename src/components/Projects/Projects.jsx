/* eslint-disable react/no-unescaped-entities */
import hostelImg from "../../assets/gallery1.jpg"
import JobImg from "../../assets/jobs.png"
import technologyImg from "../../assets/technology.jpg"
import eventImg from "../../assets/Corporate.webp"
import donationImg from "../../assets/donation.jpg"
import flowerImg from "../../assets/flower.jpg"
import Navbar from "../Navbar/Navbar"

const Projects = () => {
    return (
     <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
           <div className="max-w-7xl mx-auto flex flex-col justify-center mb-32 items-center min-h-screen pt-10 md:pt-0 ">
            <h1 className="text-3xl md:text-5xl font-bold mt-20 md:mt-24 lg:mt-32 mb-16 px-5 py-2 rounded-xl shadow-xl shadow-green-600 bg-[#311E2D] text-[#66FC03]">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 gap-5 lg:gap-8 md:px-4">
                <a href="https://hostel-management-9654d.web.app/" target="blank">
                    <div className="card bg-[#311E2D] shadow-2xl shadow-green-600 h-[530px] mb-8 md:mb-5 lg:mb-0">
                        <div className="p-4">
                            <img src={hostelImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Hostel Management</h2>
                            <p>This is a hostel management site. User can request, review and like a meal. I used some technology in this project such as JavaScript as programming language. React.js, Tailwind css, DaisyUI and Material UI as front-end and mongoose, express.js, node.js as backend. If you want to see details please click on this card.</p>
                        </div>
                    </div>
                </a>
                <a href="https://job-finder-hub.web.app/" target="blank">
                    <div className="card bg-[#311E2D] shadow-2xl shadow-green-600 h-[530px] mb-8 md:mb-0">
                        <div className="p-4">
                            <img src={JobImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Job Finder Hub</h2>
                            <p>It's a Job Management site. User can apply or add a job in this site and can do any other activities.I used some technology in this project such as JavaScript as programming language, React.js, Tailwind css, DaisyUI as front-end and mongodb, express.js, node.js as backend. If you want to see details please click on this card.</p>
                        </div>
                    </div>
                </a>
                <a href="https://techno-and-electro-client.web.app/" target="blank">
                    <div className="card bg-[#311E2D] shadow-2xl shadow-green-600 h-[530px] mb-8 md:mb-5 lg:mb-0">
                        <div className="p-4">
                            <img src={technologyImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Technology & Electronics e-commerce site </h2>
                            <p>This is a Technology and Electronics e-commerce site. User can see and buy products. I used some technology in this project such as JavaScript as programming language. React.js, Tailwind css, DaisyUI as front-end and mongodb, express.js, node.js as backend. If you want to see details please click on this card.</p>
                        </div>
                    </div>
                </a>
                <a href="https://corporate-event-manageme-92f84.web.app/" target="blank">
                    <div className="card bg-[#311E2D] shadow-2xl shadow-green-600 h-[530px] mb-8 md:mb-0">
                        <div className="p-4">
                            <img src={eventImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Corporate Event Management</h2>
                            <p>This is a Corporate Event Management site. I used some technology in this project such as JavaScript as programming language. React.js, Tailwind css, DaisyUI as front-end. If you want to see details please click on this card.</p>
                        </div>
                    </div>
                </a>
                <a href="https://roasted-honey.surge.sh/" target="blank">
                    <div className="card bg-[#311E2D] shadow-2xl shadow-green-600 h-[530px] mb-8 md:mb-0">
                        <div className="p-4">
                            <img src={donationImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Donation Campaign</h2>
                            <p>This is a Donation Campaign Management site. Used some technology in this project such as JavaScript as programming language. React.js, Tailwind css, DaisyUI as front-end. If you want to see details please click on this card.</p>
                        </div>
                    </div>
                </a>
                <a href="https://sayedul3731.github.io/my-first-assignment-website/" target="blank">
                    <div className="card bg-[#311E2D] shadow-2xl shadow-green-600 h-[530px] mb-8 md:mb-0">
                        <div className="p-4">
                            <img src={flowerImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Flower Shop</h2>
                            <p>It's just a simple lengthy page. Used JavaScript, CSS and HTML. If you want to see details please click on this card.</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
     </div>
    );
};

export default Projects;