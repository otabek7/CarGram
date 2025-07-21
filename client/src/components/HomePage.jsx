import { NavLink } from "react-router-dom";
import logo from "../assets/cargram-logo-transparent.png";
import background from "../assets/backgroundCarPhoto.jpg";
import ThreadList from "./ThreadList.jsx";
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";

export function Navbar() {}

export default function HomePage() {
    return (
        <div>
            <div
                className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden animate-[fadeIn_1.2s_ease]"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Navbar />
                <div className="flex flex-col items-center justify-center mt-10">

                    <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl px-8 py-10 max-w-xl mx-auto border border-white/40 animate-[fadeIn_1.2s_ease]">
                        <h1 className="text-5xl text-white font-bold mb-4 drop-shadow">
                            Welcome to CarGram
                        </h1>
                        <p className="text-lg text-gray-800 mb-8 font-medium">
                            Your go-to platform for all things car-related!
                            Share your builds, mods, and connect with fellow enthusiasts.
                        </p>
                        <NavLink
                            to="/forums"
                            className="animate-bounce inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-200"
                        >
                            Explore Threads
                        </NavLink>
                    </div>
                </div>
                <style>
                    {`
                @keyframes scaleIn {
                    0% { opacity: 0; transform: scale(0.7);}
                    100% { opacity: 1; transform: scale(1);}
                }
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(30px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                `}
                </style>
            </div>
            <AboutUs/>

            <Footer/>
        </div>


    );
}