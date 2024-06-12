/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "./style.css"


const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div
            id='aboutMe'
            className="px-1 pt-32">
            <div
                data-aos="zoom-in"
                className="card w-5/6 mx-auto bg-[#311E2D] shadow-2xl shadow-green-600">
                <div className="card-body">
                    <h2 className="text-start text-4xl my-5 font-semibold text-[#66FC03]">About Me</h2>
                    {/* <p className="text-start text-white">
                        I'm Md Sayedul Haque who passionate Mern-Stack web developer with expertise in JavaScript, MongoDB, Express.js, React.js, Node.js and also I know React framework Next.js and I have some knowledge on Prisma, MySQL. Committed to creating engaging and seamless user experiences. Proficient in translating design concepts into responsive and dynamic web applications. A problem-solver with a keen eye for detail, dedicated to staying updated on industry trends. Eager to contribute creativity and technical skills to innovative projects.
                    </p> */}
                    <div className='w-full flex justify-center'>
                        <div className='w-1/3'></div>
                        <div className='w-2/3 -mt-5 '>
                            <div className='aboutMe'>
                                <h1 className='text-3xl font-semibold'>Next.js Web Developer</h1>
                                <p>I have experience to work as Next.js Web Developer with a dynamic it solution company named Dot BD Solution which is located Gulshan, Dhaka.</p>
                            </div>
                            <div className='my-1 aboutMe'>
                                <h1 className='text-3xl font-semibold'>Frontend Web Developer</h1>
                                <p>I'm a front-end web developer with experience in building responsive, user experience and optimized sites.</p>
                            </div>
                            <div className='aboutMe'>
                                <h1 className='text-3xl font-semibold'>Backend Web Developer</h1>
                                <p>I have experience developing fast and optimised back-end systems and APIs.</p>
                            </div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;