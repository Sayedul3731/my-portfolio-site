/* eslint-disable react/no-unescaped-entities */

import Navbar from "../../components/Navbar/Navbar";


const AboutMe = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
             <div className="card w-5/6 mx-auto bg-[#5832a8] shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title font-semibold text-[#fff]">About Me</h2>
                    <p className="text-start">
                        I'm Md Sayedul Haque who passionate front-end web developer with expertise in JavaScript, React, CSS, and HTML and also I know React framework Next.js and I have some knowledge on MongoDB, Node.js and Express.js. Committed to creating engaging and seamless user experiences. Proficient in translating design concepts into responsive and dynamic web applications. A problem-solver with a keen eye for detail, dedicated to staying updated on industry trends. Eager to contribute creativity and technical skills to innovative projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;