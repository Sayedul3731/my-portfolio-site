/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full h-[350px] mb-32 md:mb-0 md:h-[600px]">
            <div className="w-1/2  flex justify-center md:pl-20 lg:pl-0 items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white"><span className="">Hi</span>, I'm  <br />Front-end <span className="">Developer</span>.</h1>
            </div>
            <div className="w-1/2  flex justify-center items-center">
                <img src="https://i.ibb.co/Hzp66jb/taki-removebg-preview.png" alt="my picture" />
            </div>
        </div>
    );
};

export default Banner;