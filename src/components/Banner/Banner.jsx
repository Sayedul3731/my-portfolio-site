/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mb-32 md:mb-0 md:h-[600px] ">
            <div className="w-1/2  flex flex-col justify-start">
                <h1 className="text-3xl md:text-5xl mt-10 font-bold  text-black "><span className="text-black">Hi,</span> This is <br />MD SAYEDUL HAQUE
                </h1>
                <p className="text-xl md:text-2xl font-semibold my-5 flex text-[#000000]">I'm Front-End Web Developer
                </p>
                <p>
                    From Brahmanbaria, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at JavaScript & React. I love to talk with you about your unique.
                </p>
            </div>
            <div className="w-1/2 flex justify-end">
                <img src="https://i.ibb.co/Hzp66jb/taki-removebg-preview.png" alt="my picture" />
            </div>
        </div>
    );
};

export default Banner;