import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import { useState } from "react";
import Footer from "../Pages/Footer/Footer";
import Available from "../Pages/Home/Shared/Available/Available";

const Root = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className={`${isDarkMode ? "bg-black text-white" : " bg-white text-black"}`}>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} ></Navbar>
            <div className="">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;