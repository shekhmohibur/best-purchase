import { FaBars, FaXmark, FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.webp'
import '../header/Header.css'
import { useState } from "react";
const Header = () => {
    const [menuIcon, setMenuIcon] = useState(true);
    const [searchIcon, setSearchIcon] = useState(true);
    return (
        <div className="w-full h-16 px-5 items-center flex justify-between backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
            <div className="container px-3 lg:w-1/3">
                <NavLink to={'/'}>
                    <div className="w-10">
                        <img src={logo} alt="Best Purchase logo" />
                    </div>
                </NavLink>
            </div>
            <div className="flex lg:w-1/3 mr-7 lg:m-0 items-center gap-2" title="Search Products">
                <input type="text" placeholder="Search Products" className={`outline-none border-2 py-2 px-3 rounded-lg hidde md:flex w-32 md:w-52 lg:w-60 ${searchIcon === true ? 'hidden' : ''}`} />
                <div onClick={() => setSearchIcon(!searchIcon)}>
                    {searchIcon === true ? <FaMagnifyingGlass className="lg:hidden text-lg" /> : <FaXmark className="lg:hidden text-xl" />}
                </div>

            </div>
            <div>
                <button className={`lg:hidden outline outline-gray-500 p-1 rounded-md fixed right-3 top-5`} onClick={() => setMenuIcon(!menuIcon)}>{menuIcon === true ? <FaBars /> : <FaXmark />}</button>
                <div className={`flex lg:flex-row gap-4 text-lg ${menuIcon === true ? 'hidden' : 'lg:hidden'}`}>
                    <div className="flex flex-col lg:flex-row gap-2 absolute top-16 right-0 bg-white shadow-md p-3">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/products'}>Products</NavLink>
                        <NavLink to={'/contact-us'}>Contact Us</NavLink>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>

                </div>
                <div className="hidden lg:flex gap-3">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/products'}>Products</NavLink>
                    <NavLink to={'/contact-us'}>Contact Us</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;