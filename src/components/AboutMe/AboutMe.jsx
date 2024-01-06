/* eslint-disable react/no-unescaped-entities */
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
        <div className="px-1">
            <div
            data-aos="zoom-in"
            className="card w-5/6 mx-auto bg-[#311E2D] shadow-2xl shadow-green-600">
                <div className="card-body">
                    <h2 className="text-start text-4xl my-5 font-semibold text-[#66FC03]">About Me</h2>
                    <p className="text-start text-white">
                        I'm Md Sayedul Haque who passionate front-end web developer with expertise in JavaScript, React, CSS, and HTML and also I know React framework Next.js and I have some knowledge on MongoDB, Node.js and Express.js. Committed to creating engaging and seamless user experiences. Proficient in translating design concepts into responsive and dynamic web applications. A problem-solver with a keen eye for detail, dedicated to staying updated on industry trends. Eager to contribute creativity and technical skills to innovative projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;