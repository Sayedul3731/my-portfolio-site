

const Skills = () => {
    return (
        <div className="px-1">
            <div className="card lg:w-[450px] bg-[#0590fa] shadow-2xl">
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
        </div>
    );
};

export default Skills;