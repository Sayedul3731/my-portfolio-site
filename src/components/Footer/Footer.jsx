import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer items-center py-8 md:py-8 lg:py-0 flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center  lg:px-60 bg-neutral text-neutral-content">
            <aside className="items-center lg:pl-16 lg:w-2/3 lg:justify-between grid-flow-col">
                <img src="/logo.png" className="hidden md:flex md:w-[100px]" alt="" />
                <p className=" text-xs md:text-md ">Copyright © 2023 - All right reserved || MD SAYEDUL HAQUE</p>
            </aside>
            <nav className="grid-flow-col lg:pr-[70px] lg:w-1/3 flex justify-end gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.facebook.com/profile.php?id=100080030528805" className="text-3xl" target="blank">
                    <FaFacebook></FaFacebook>
                </a>
                <a href="https://github.com/Sayedul3731" className="text-3xl" target="blank">
                    <FaGithub></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/md-sayedul-haqueb3972b2a2/
" target="blank" className="text-3xl">
                    <FaLinkedin></FaLinkedin>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;