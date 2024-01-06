import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    }, [])
    return (
        <div 
        data-aos="zoom-in"
        className="px-1 w-5/6 mx-auto">
            <div className="card bg-[#311E2D] mt-20 shadow-2xl shadow-green-600">
                <div className="card-body text-white">
                    <h2 className="card-title text-4xl my-5 text-[#66FC03]">Skills</h2>
                    JavaScript
                    <progress className="progress progress-success" value="60" max="100"></progress>
                    React.js
                    <progress className="progress progress-success" value="65" max="100"></progress>
                    Next.js
                    <progress className="progress progress-success" value="42" max="100"></progress>
                    Tailwind CSS
                    <progress className="progress progress-success" value="85" max="100"></progress>
                    CSS
                    <progress className="progress progress-success" value="55" max="100"></progress>
                    Bootstrap
                    <progress className="progress progress-success" value="60" max="100"></progress>
                    HTML
                    <progress className="progress progress-success" value="85" max="100"></progress>
                    MongoDB
                    <progress className="progress progress-success" value="40" max="100"></progress>
                    Express.js
                    <progress className="progress progress-success" value="45" max="100"></progress>
                    Node.js
                    <progress className="progress progress-success" value="42" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;