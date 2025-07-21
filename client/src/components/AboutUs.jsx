import { useEffect, useRef } from "react";
import anthonyBautista from "../assets/anthony-bautista.jpg";

export default function AboutUs() {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current) {
                const offset = window.scrollY * 0.2;
                imgRef.current.style.transform = `translateY(${offset}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-row items-start w-full mb-32"> {}
            <section className="w-full max-w-4xl ml-12 my-16 bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border-l-8 border-indigo-400 flex flex-col items-start text-left relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r rounded-t-3xl" />
                <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-lg">
                    About Car Gram
                </h2>
                <p className="text-2xl text-gray-900 font-medium mb-6 leading-relaxed">
                    CarGram is a vibrant community for car enthusiasts to share their builds, modifications, and experiences.
                    <br /><br />
                    Our mission is to connect people who are passionate about cars, foster learning, and celebrate automotive creativity.
                    <br /><br />
                    Join us to showcase your ride, get inspired, and make new friends!
                </p>
            </section>
            <div className="relative flex-shrink-0 mr-16 ml-30 mb-32"> {}
                <img
                    ref={imgRef}
                    src={anthonyBautista}
                    alt="Parallax Car"
                    className="w-[350px] h-[400px] object-cover rounded-2xl shadow-2xl"
                    style={{ willChange: "transform" }}
                />

            </div>
        </div>
    );
}