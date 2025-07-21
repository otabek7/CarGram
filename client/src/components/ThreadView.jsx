import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function ThreadView() {
    const { id } = useParams();
    const [thread, setThread] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalImg, setModalImg] = useState(null);


    useEffect(() => {
        async function fetchThread() {
            const response = await fetch(`http://localhost:5050/record/${id}`);
            if (!response.ok) {
                setThread(null);
                setLoading(false);
                return;
            }
            const data = await response.json();
            setThread(data);
            setLoading(false);
        }
        fetchThread();
    }, [id]);

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
                <span className="text-lg font-semibold">Loading a thread...</span>
            </div>
        );
    }

    if (!thread) {
        return <div className="flex justify-center items-center h-screen">Thread not found.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 border:rounded shadow-xl bg-white">
            <h1 className="text-3xl font-bold mb-4">{thread.title}</h1>
            <p className="mb-2"><span className="font-semibold">User's Car:</span> {thread.carModel}</p>
            <p className="mb-2"><span className="font-semibold">Description:</span></p>
            <p className="mb-4">{thread.threadMessage}</p>
            {Array.isArray(thread.images) && thread.images.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">User's Images:</h2>
                    <div className="flex flex-wrap gap-4">
                        {thread.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thread image ${idx + 1}`}
                                className="max-h-60 rounded shadow cursor-pointer transition hover:scale-105"
                                onClick={() => setModalImg(img)}
                            />
                        ))}
                    </div>
                </div>
            )}
            <Link to="/forums" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Back to Threads
            </Link>

            {modalImg && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setModalImg(null)}
                >
                    <div
                        className="relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <img src={modalImg} alt="Enlarged" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl" />
                        <button
                            className="absolute top-2 right-2 bg-white/80 text-black rounded-full px-3 py-1 font-bold shadow hover:bg-white"
                            onClick={() => setModalImg(null)}
                        >
                            &#10005;
                        </button>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
}