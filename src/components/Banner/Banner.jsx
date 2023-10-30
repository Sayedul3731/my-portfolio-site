/* eslint-disable react/no-unescaped-entities */
import photo from "../../assets/taki.png"

const Banner = () => {
    return (
        <div className="flex justify-between items-center w-full h-[600px] bg-gradient-to-r from-red-500 to-yellow-500">
            <div className="w-1/2 flex justify-center items-center">
                <h1 className="text-5xl font-bold"><span className="">Hi</span>, I'm  <br />Front-end <span className="">Developer</span>.</h1>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img src={photo} alt="my picture" />
            </div>
        </div>
    );
};

export default Banner;