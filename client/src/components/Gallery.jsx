import React, {useState, useEffect} from "react";
import lanceAsper from "../assets/lance-asper.jpg";
import anthonyBautista from "../assets/anthony-bautista.jpg";
import chrisNguyen from "../assets/chris-nguyen.jpg";
import dillonKydd from "../assets/dillon-Kydd.jpg";
import erikMclean from "../assets/erik-mclean.jpg";
import peterBroomfield from "../assets/peter-broomfield.jpg";
import stefanRodriguez from "../assets/stefan-rodriguez.jpg";
import stevenBinotto from "../assets/steven-binotto.jpg";
import viktorTheo from "../assets/viktor-theo.jpg";
import guillermoCasales from "../assets/guillermo-casales.jpg";
import nathanMarquardt from "../assets/nathan-marquardt.jpg";
import josueSoto from "../assets/josue-soto.jpg";
import Footer from "./Footer.jsx";

export default function Gallery() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (

            <div className="flex flex-col justify-center items-center h-screen">
                <svg
                    className="animate-spin h-10 w-10 text-indigo-600 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>
                <span className="text-lg font-semibold">Loading gallery...</span>
            </div>
        );
    }

    return (

        <div>
            <h3 className="text-3xl font-extrabold text-indigo-700 py-5">Your Community's Gallery</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={lanceAsper}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={guillermoCasales}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={dillonKydd}
                             alt="gallery-photo"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={anthonyBautista}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={erikMclean}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={nathanMarquardt}
                             alt="gallery-photo"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={peterBroomfield}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={stevenBinotto}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={josueSoto}
                             alt="gallery-photo"/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={viktorTheo}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={stefanRodriguez}
                             alt="gallery-photo"/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg object-cover object-center" src={chrisNguyen}
                             alt="gallery-photo"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    );
}