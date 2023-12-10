import { Link } from "react-router-dom";


const Skills = () => {
    return (
        <div className="min-h-screen py-10">
              <div className="card w-5/6 mx-auto bg-[#5832a8] shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title">Skills</h2>
                    JavaScript
                    <progress className="progress progress-secondary" value="60" max="100"></progress>
                    React.js
                    <progress className="progress progress-secondary" value="65" max="100"></progress>
                    Next.js
                    <progress className="progress progress-secondary" value="42" max="100"></progress>
                    CSS
                    <progress className="progress progress-secondary" value="55" max="100"></progress>
                    HTML
                    <progress className="progress progress-secondary" value="85" max="100"></progress>
                    MongoDB
                    <progress className="progress progress-secondary" value="40" max="100"></progress>
                    Express.js
                    <progress className="progress progress-secondary" value="45" max="100"></progress>
                    Node.js
                    <progress className="progress progress-secondary" value="42" max="100"></progress>
                </div>
            </div>
            <div className=" flex justify-end mx-auto w-5/6 mt-[100px]">
                <Link to="/"><button className="bg-red-500 px-10 py-3 font-bold rounded-sm text-xl">Go Home</button></Link>
            </div>
        </div>
    );
};

export default Skills;