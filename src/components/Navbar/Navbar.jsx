/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const Navbar = () => {


    const navLinks = <>
        <li><Link to="/" className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Home</Link></li>
        <li><a href="#aboutMe" className="text-xl font-medium hover:text-white  hover:bg-[#66FC03] hover:text-black">About Me</a></li>
        <li><a href="#skills" className="text-xl font-medium hover:text-white  hover:bg-[#66FC03] hover:text-black">Skills</a></li>
        <li><a href="#experience"  className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Experience</a></li>
        <li><a href="#gallery" className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Projects</a></li>
        <li><a href="#contact" className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Contact</a></li>
    </>
    return (
        <div className="navbar py-5 pr-[630px] md:text-white fixed z-10 bg-[#221E22]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#311E2D] rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex md:w-full justify-center">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;