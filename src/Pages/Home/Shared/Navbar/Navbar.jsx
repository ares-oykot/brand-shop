import { Link, NavLink } from "react-router-dom";
import Logo from "../../../../assets/shopping-bag.png"
import textLogo from "../../../../assets/logo.png"
import profile from "../../../../assets/user.png"
import moon from "../../../../assets/moon.png"
import moon1 from "../../../../assets/moon1.png"
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const user = ''
    const handleSignOut = {

    }
    const navLinks =
        <div className="flex flex-col lg:flex-row text-lg gap-2 font-semibold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "text-white px-5 py-2 w-full rounded-full bg-orange-500"
                                : "bg-yellow-500 duration-300 w-full hover:px-6 hover:bg-yellow-600 py-2 rounded-3xl px-5"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/addProduct"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "text-white py-2 px-5 rounded-full w-full bg-orange-500"
                                : "bg-yellow-500 duration-300 hover:px-6 w-full hover:bg-yellow-600 py-2 rounded-3xl px-5"
                    }
                >
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myCart"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "text-white py-2 px-5 rounded-full shadow bg-orange-500"
                                : "bg-yellow-500 duration-300 hover:px-6 hover:bg-yellow-600 py-2 rounded-3xl px-5"
                    }
                >
                    My Cart
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/signIn"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "text-white py-2 px-5 rounded-full shadow bg-orange-500"
                                : "bg-yellow-500 duration-300 hover:px-6 hover:bg-yellow-600 py-2 rounded-3xl px-5"
                    }
                >
                    Sign In
                </NavLink>
            </li>
        </div>
    return (
        <div>
            <div className="navbar bg-[#ffcb7d]">
                <div className="navbar-start">
                    <div className="flex items-center">
                        <img className="h-12 hidden lg:inline mb-1" src={Logo} alt="" />
                        <img className="h-14 hidden lg:inline " src={textLogo} alt="" />
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm bg-[#ffcb7d] dropdown-content mt-3 z-[1] p-2 shadow w-36 rounded-xl">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="md:mr-12 lg:hidden">
                    <img className="h-10 md:h-14 lg:hidden" src={Logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="mr-5 mt-1" onClick={toggleDarkMode}>
                        {
                            isDarkMode? 
                            <>
                                <img className="w-8 h-8" src={moon} alt="" />
                            </>
                            :
                            <>
                                <img className="w-8 h-8" src={moon1} alt="" />
                            </>
                        }
                    </button>
                    {
                        user?.displayName ? <p className="text-[9px] md:text-base font-bold mr-2 bg-emerald-300 px-2 rounded-sm">{user.displayName}</p>
                            :
                            ""
                    }
                    <div className="dropdown z-50 dropdown-hover">

                        <label tabIndex={0} className="">
                            <div className="w-10">
                                {
                                    user?.photoURL ? <img className="rounded-full" src={user?.photoURL} /> :
                                        <img className="rounded-full" src={profile} />
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded p-1 w-32  right-0">
                            {
                                user ? <button onClick={handleSignOut} className=" bg-emerald-600 w-full text-white px-6 py-2 rounded-sm">Sign Out</button>
                                    :
                                    <Link to="/login"><button className=" bg-emerald-600 w-full text-white px-6 py-2 rounded-sm">Login</button></Link>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
