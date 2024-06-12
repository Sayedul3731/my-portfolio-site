import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import html5 from "../../assets/icons/html5.png"
import css3 from "../../assets/icons/css3.png"
import tailwind from "../../assets/icons/tailwind.png"
import bootstrap from "../../assets/icons/bootstrap.png"
import js from "../../assets/icons/js.png"
import mui from "../../assets/icons/mui.png"
import react from "../../assets/icons/reactjs.webp"
import next from "../../assets/icons/nextjs.png"
import mongodb from "../../assets/icons/mongodb.png"
import expressjs from "../../assets/icons/expressjs.png"
import nodejs from "../../assets/icons/nodejs.png"
import prisma from "../../assets/icons/prisma.png"
import mySQL from "../../assets/icons/mySQL.png"


const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    const icons = [
        {
            title: "ReactJS",
            icon: react
        },
        {
            title: "NextJS",
            icon: next
        },
        {
            title: "JS",
            icon: js
        },
        {
            title: "HTML5",
            icon: html5
        },
        {
            title: "CSS3",
            icon: css3
        },
        {
            title: "Tailwind CSS",
            icon: tailwind
        },
        {
            title: "Bootstrap",
            icon: bootstrap
        },
        {
            title: "Material UI",
            icon: mui
        },
        {
            title: "MongoDB",
            icon: mongodb
        },
        {
            title: "ExpressJS",
            icon: expressjs
        },
        {
            title: "NodeJS",
            icon: nodejs
        },
        {
            title: "Prisma",
            icon: prisma
        },
        {
            title: "mySQL",
            icon: mySQL
        },
    ]
    return (
        <div
            id='skills'
            className="px-1 pt-32 w-5/6 mx-auto">
            <div className='flex justify-center items-center'>
                <h2 data-aos="flip-right" className="text-3xl  text-center md:text-5xl font-bold md:mt-24 lg:mt-10 mb-16 px-5 py-2 rounded-xl shadow-xl shadow-green-600 bg-[#311E2D] text-[#66FC03]">Skills</h2>
            </div>
            <div data-aos="zoom-in">
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pl-40 mt-5'>
                        {
                            icons.map((item, i) => <div key={i} className='w-[150px] h-[150px] rounded-full bg-white mb-10 hover:rotate-2 transition'>
                                <img src={item.icon} alt="" className='w-full h-full object-cover' />
                                <p className=' flex justify-center items-center text-2xl'>{item.title}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;