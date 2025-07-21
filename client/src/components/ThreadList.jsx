import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";
import Footer from "./Footer.jsx";

const Record = (props) => (
    <tr className="even:bg-gray-50 odd:bg-white hover:bg-indigo-50 transition-colors border-b">
        <td className="px-4 py-3 flex items-center gap-2">
            <span className="font-semibold">{props.record.title}</span>
        </td>
        <td className="px-4 py-3 text-slate-700">{props.record.carModel}</td>
        <td className="px-4 py-3 text-slate-600">{props.record.threadMessage}</td>
        <td className="px-4 py-3">
            <div className="flex gap-2">
                <Link
                    to={`/thread/${props.record._id}`}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition"
                >
                    View
                </Link>
                <Link
                    to={`/edit/${props.record._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition"
                >
                    Edit
                </Link>
                <button
                    onClick={() => props.deleteRecord(props.record._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </div>
        </td>
    </tr>
);

export default function ThreadList() {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRecords() {
            setLoading(true);
            const response = await fetch(`http://localhost:5050/record/`);
            if (!response.ok) {
                console.error(`An error occurred: ${response.statusText}`);
                setLoading(false);
                return;
            }
            const records = await response.json();
            setRecords(records);
            setLoading(false);
        }
        getRecords();
    }, [records.length]);

    async function deleteRecord(id) {
        await fetch(`http://localhost:5050/record/${id}`, {
            method: "DELETE",
        });
        setRecords(records.filter((record) => record._id !== id));
    }

    function recordList() {
        return records.map((record) => (
            <Record
                record={record}
                deleteRecord={deleteRecord}
                key={record._id}
            />
        ));
    }

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
                <span className="text-lg font-semibold">Loading threads...</span>
            </div>
        );
    }

    return (
        <div>
            <div className="max-w-5xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-3xl font-extrabold text-indigo-700">Your Community's Threads</h3>
                </div>
                <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
                    <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                        <thead className="bg-indigo-100">
                        <tr>
                            <th className="px-4 py-3 rounded-tl-xl">Title</th>
                            <th className="px-4 py-3">Car Year/Make/Model</th>
                            <th className="px-4 py-3">Message</th>
                            <th className="px-4 py-3 rounded-tr-xl">Action</th>
                        </tr>
                        </thead>
                        <tbody>{recordList()}</tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
}