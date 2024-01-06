/* eslint-disable react/no-unescaped-entities */
import { IoSchool } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
 


const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div className="max-w-7xl mx-auto pb-32 md:pb-0">
            <Navbar></Navbar>
            <div
            data-aos="zoom-in"
            className="w-5/6 mx-auto pt-40 ">
                <div className="card bg-[#311E2D] shadow-2xl shadow-green-600">
                    <div className="card-body">
                        <h2 className="text-start text-4xl my-5 font-semibold text-[#66FC03]">About Me</h2>
                        <p className="text-start text-white">
                            I'm Md Sayedul Haque who passionate front-end web developer with expertise in JavaScript, React, CSS, and HTML and also I know React framework Next.js and I have some knowledge on MongoDB, Node.js and Express.js. Committed to creating engaging and seamless user experiences. Proficient in translating design concepts into responsive and dynamic web applications. A problem-solver with a keen eye for detail, dedicated to staying updated on industry trends. Eager to contribute creativity and technical skills to innovative projects.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-5/6 flex flex-col  md:flex-col lg:flex-row my-14 justify-center items-center mx-auto gap-5">
                <div
                data-aos="zoom-in"
                className="w-full lg:w-1/2 h-[400px] flex justify-center items-center">
                    <div className="card mx-auto w-full h-[380px] bg-[#311E2D] shadow-2xl shadow-green-600">
                        <div className="card-body">
                            <h2 className="text-start text-4xl my-5 font-semibold text-[#66FC03]">Education</h2>
                            <div>
                                <span className="text-[#66FC03] text-2xl"><IoSchool></IoSchool></span>
                                <p className="my-1">2018 - Present</p>
                                <p>B.Sc. In Mathematics</p>
                                <p>National University</p>
                            </div>
                            <div className="mt-5">
                                <span className="text-[#66FC03] text-2xl"><IoSchool></IoSchool></span>
                                <p className="my-1">2016 - 2018</p>
                                <p>HSC In Science</p>
                                <p>Nasirnagar Govt. College</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                data-aos="zoom-in"
                className="px-1 w-full lg:w-1/2 h-[400px] flex justify-center items-center">
                    <div className="card mx-auto h-[480px] mt-32 md:mt-0 md:h-[380px] bg-[#311E2D] shadow-2xl shadow-green-600">
                        <div className="card-body">
                            <h2 className="text-start text-4xl my-5 font-semibold text-[#66FC03]">Experiences</h2>
                            <p className="text-start text-white">
                                As a fresher I have experience doing many projects. Some of these projects are: Hostel Management, Job Finder Hub, Technology & Electronics e-commerce site, Corporate Event Management, Donation Campaign etc. I faced many challenges do this projects and gain many experiences. Which will help me tremendously in the next projects.
                            </p>

                            <Link to="/projects">
                            <button className="flex justify-center items-center gap-1 text-[#66FC03]"> <span>See All Projects</span> <span><FaArrowRight></FaArrowRight></span></button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;