/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

const Navbar = () => {


    const navLinks = <>
        <li><Link to="/" className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Home</Link></li>
        <li><Link to="/aboutMe" className="text-xl font-medium hover:text-white  hover:bg-[#66FC03] hover:text-black">About Me</Link></li>
        <li><Link to="/skills" className="text-xl font-medium hover:text-white  hover:bg-[#66FC03] hover:text-black">Skills</Link></li>
        <li><Link to="/projects" className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Projects</Link></li>
        <li><Link to="/contact" className="text-xl font-medium hover:text-white hover:bg-[#66FC03] hover:text-black ">Contact</Link></li>
    </>
    return (
        <div className="navbar py-5 pr-[630px] md:text-white fixed z-10 bg-[#221E22]">
            <div className="navbar-start md:w-0">
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