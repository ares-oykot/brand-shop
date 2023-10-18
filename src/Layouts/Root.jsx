import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";
import { useState } from "react";

const Root = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className={`${isDarkMode ? "bg-black text-white" : " bg-white text-black"}`}>
            <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} ></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;