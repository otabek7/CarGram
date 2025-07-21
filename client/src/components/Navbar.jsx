import { NavLink } from "react-router-dom";
import logo from "../assets/cargram-logo-transparent.png";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
                isSticky
                    ? "bg-white/30 backdrop-blur-lg rounded-b-2xl shadow-xl border-b border-white/40 opacity-100 scale-100"
                    : "bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 opacity-90 scale-97"
            } flex justify-between items-center px-10 py-4 mb-8`}
            >
                <NavLink to="/">
                    <img alt="CarGram logo" className="h-12 drop-shadow-lg" src={logo} />
                </NavLink>
                <div className="flex space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center nav-link whitespace-nowrap text-lg font-semibold px-4 py-2 rounded-lg transition-colors border border-transparent
                        ${isActive ? "bg-indigo-600 text-white shadow" : "bg-white/60 text-indigo-700 hover:bg-indigo-100"}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            `flex items-center nav-link whitespace-nowrap text-lg font-semibold px-4 py-2 rounded-lg transition-colors border border-transparent
                        ${isActive ? "bg-indigo-600 text-white shadow" : "bg-white/60 text-indigo-700 hover:bg-indigo-100"}`
                        }
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/forums"
                        className={({ isActive }) =>
                            `flex items-center nav-link whitespace-nowrap text-lg font-semibold px-4 py-2 rounded-lg transition-colors border border-transparent
                        ${isActive ? "bg-indigo-600 text-white shadow" : "bg-white/60 text-indigo-700 hover:bg-indigo-100"}`
                        }
                    >
                        Threads
                    </NavLink>
                    <NavLink
                        to="/create"
                        className={({ isActive }) =>
                            `flex items-center nav-link whitespace-nowrap text-lg font-semibold px-4 py-2 rounded-lg transition-colors border border-transparent
                        ${isActive ? "bg-indigo-600 text-white shadow" : "bg-white/60 text-indigo-700 hover:bg-indigo-100"}`
                        }
                    >
                        Post a Thread
                    </NavLink>
                </div>
            </nav>
            <div className="h-20 w-full" /> {}
        </>
    );
}