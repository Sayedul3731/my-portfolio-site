

const Skills = () => {
    return (
        <div className="px-1 w-5/6 mx-auto">
            <div className="card bg-[#3f4531] my-10 shadow-2xl">
                <div className="card-body text-white">
                    <h2 className="card-title text-white">Skills</h2>
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
        </div>
    );
};

export default Skills;