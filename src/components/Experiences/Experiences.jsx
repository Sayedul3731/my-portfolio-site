/* eslint-disable react/no-unescaped-entities */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Experiences = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div
            data-aos="zoom-out"
            className="px-1 pt-20">
            <div className="card w-5/6 mx-auto mt-20 bg-[#311E2D] shadow-2xl shadow-green-600">
                <div className="card-body">
                    <h2 className="text-start text-4xl my-5 font-semibold text-[#66FC03]">Experiences</h2>
                    <p className="text-start text-white">
                        I have experienced to work with a dynamic it solution company named Dot BD Solution Limited. I have worked with the company as contractual which time period was 2 month from march 2024 to may 2024. I'm successfully worked with the company and also I'm doing many projects. Some of these projects are: Hostel Management, Job Finder Hub, Technology & Electronics e-commerce site, Corporate Event Management, Donation Campaign etc. I faced many challenges do this projects and gain many experiences. Which will help me tremendously in the next projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experiences;