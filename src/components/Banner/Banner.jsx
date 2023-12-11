/* eslint-disable react/no-unescaped-entities */


const Banner = () => {


    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full mb-20 md:mb-20 md:mb-0 md:h-[800px] lg:h-[600px] pt-24 md:pt-32 ">
            <div className="w-5/6 md:w-5/6 lg:w-1/2 flex flex-col justify-start">
                <h1 className="text-3xl md:text-5xl mt-10 font-bold   "><span className="text-[#66FC03]">Hi,</span> This is <br />MD SAYEDUL HAQUE
                </h1>
                <p className="text-xl md:text-2xl font-semibold my-5 flex text-[#66FC03]">I'm Front-End Web Developer
                </p>
                <p>
                    From Brahmanbaria, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at JavaScript & React. I love to talk with you about your unique.
                </p>
            </div>
            <div className="w-5/6 md:w-5/6 lg:w-1/2 flex md:justify-center lg:justify-end mb-10 md:mb-0">
                <img className="bg-green-600 shadow-2xl shadow-green-600" src="https://i.ibb.co/Hzp66jb/taki-removebg-preview.png" alt="my picture" />
            </div>
          
        </div>
    );
};

export default Banner;