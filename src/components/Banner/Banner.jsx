/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full mb-32 md:mb-0 md:h-[600px] ">
            <div className="w-full  lg:-mb-[84px] md:w-1/2  flex flex-col justify-start  md:justify-center md:items-center px-3 md:px-0 md:pl-20 lg:pl-0 ">
                <h1 className="text-3xl md:text-5xl mt-10 md:mt-0 font-bold  text-white "><span className="text-[#fc03c2]">Hi,</span> This is <br /> MD SAYEDUL HAQUE</h1>
                <div className="">
                    <p className="text-xl md:text-2xl font-semibold my-5 flex md:justify-center  lg:-ml-[140px] text-[#fc03c2]">I'm Front-End Web Developer</p>
                </div>
                <div className=" lg:pl-[244px] ">
                    <p>
                        From Brahmanbaria, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at JavaScript & React. I love to talk with you about your unique.
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img src="https://i.ibb.co/Hzp66jb/taki-removebg-preview.png" alt="my picture" />
            </div>
        </div>
    );
};

export default Banner;