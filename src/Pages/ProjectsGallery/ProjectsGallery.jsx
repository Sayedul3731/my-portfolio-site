import hostelImg from "../../assets/gallery1.jpg"
import JobImg from "../../assets/jobs.webp"
import technologyImg from "../../assets/banner (1).jpg"
import eventImg from "../../assets/event-technology (1).jpg"
import donationImg from "../../assets/donation.jpg"
import flowerImg from "../../assets/photo-2.avif"



const ProjectsGallery = () => {
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen mb-10">
            <h1 className="text-5xl font-semibold mt-10 mb-8">Projects Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 lg:px-0 gap-5 lg:gap-8">
                <a href="https://hostel-management-9654d.web.app/" target="blank">
                    <div className="card bg-[#5832a8] shadow-2xl h-[450px]">
                        <div className="p-4">
                            <img src={hostelImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Hostel Management</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis culpa nemo alias omnis nulla.</p>
                        </div>
                    </div>
                </a>
                <a href="https://job-finder-hub.web.app/" target="blank">
                    <div className="card bg-[#5832a8] shadow-2xl h-[450px]">
                        <div className="p-4">
                            <img src={JobImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Job Finder Hub</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis culpa nemo alias omnis nulla.</p>
                        </div>
                    </div>
                </a>
                <a href="https://techno-and-electro-client.web.app/" target="blank">
                    <div className="card bg-[#5832a8] shadow-2xl h-[450px]">
                        <div className="p-4">
                            <img src={technologyImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Technology & Electronics e-commerce site </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur  .</p>
                        </div>
                    </div>
                </a>
                <a href="https://corporate-event-manageme-92f84.web.app/" target="blank">
                    <div className="card bg-[#5832a8] shadow-2xl h-[450px]">
                        <div className="p-4">
                            <img src={eventImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Corporate Event Management</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis culpa nemo alias omnis nulla.</p>
                        </div>
                    </div>
                </a>
                <a href="https://roasted-honey.surge.sh/" target="blank">
                    <div className="card bg-[#5832a8] shadow-2xl h-[450px]">
                        <div className="p-4">
                            <img src={donationImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Donation Campaign</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis culpa nemo alias omnis nulla.</p>
                        </div>
                    </div>
                </a>
                <a href="https://sayedul3731.github.io/my-first-assignment-website/" target="blank">
                    <div className="card bg-[#5832a8] shadow-2xl h-[450px]">
                        <div className="p-4">
                            <img src={flowerImg} className="rounded-xl h-[250px] object-cover w-full" alt="" />
                            <h2 className="text-3xl font-semibold my-2">Flower Shop</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis culpa nemo alias omnis nulla.</p>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    );
};

export default ProjectsGallery;