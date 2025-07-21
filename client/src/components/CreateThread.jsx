import React, { useState, useEffect, useRef } from "react";
import {useParams, useNavigate} from "react-router-dom";
import Footer from "./Footer.jsx";

export default function CreateThread() {
    const [form, setForm] = useState({
        title: "",
        carModel: "",
        threadMessage: "",
        images: [],
    });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);


    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(
                `http://localhost:5050/record/${params.id.toString()}`
            );
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                console.warn(`CreateThread with id ${id} not found`);
                navigate("/");
                return;
            }
            setForm(record);
        }

        fetchData();
        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        setForm((prev) => ({ ...prev, ...value }));
    }

    // Handle image upload
    function handleImageChange(e) {
        const files = Array.from(e.target.files);
        const readers = files.map(file => {
            return new Promise(resolve => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });
        Promise.all(readers).then(images => {
            setForm(prev => ({ ...prev, images: [...prev.images, ...images] }));
        });
    }


    // Remove image by index
    function removeImage(idx) {
        setForm(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== idx)
        }));
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        const person = {...form};
        try {
            let response;
            if (isNew) {
                response = await fetch("http://localhost:5050/record", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
            } else {
                response = await fetch(`http://localhost:5050/record/${params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({title: "", carModel: "", threadMessage: ""});
            navigate("/forums");
        }
    }

    // Custom file input button
    function triggerFileInput() {
        fileInputRef.current.click();
    }

    // The following section will display the form that takes the input from the user.
    return (
        <>
            <h3 className="text-3xl font-extrabold p-4 max-w-6xl mx-auto text-indigo-700 py-5">Post/Update a Thread</h3>
            <form
                onSubmit={onSubmit}
                className="border rounded-lg overflow-hidden p-4 max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2 ">
                    <div>
                        <h2 className="text-3xl font-extrabold leading-7 text-slate-900">
                            Thread Info
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                            This information will be displayed publicly so be careful what you
                            share.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Title *
                            </label>
                            <div className="mt-2">
                                <div
                                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Enter a captivating title"
                                        value={form.title}
                                        onChange={(e) => updateForm({title: e.target.value})}
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label
                                htmlFor="carModel"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Car Year/Make/Model *
                            </label>
                            <div className="mt-2">
                                <div
                                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <textarea
                                        type="text"
                                        name="carModel"
                                        id="carModel"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Your Car's Year/Make/Model"
                                        value={form.carModel}
                                        onChange={(e) => updateForm({carModel: e.target.value})}
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="threadMessage"
                                className="block text-sm font-medium leading-6 text-slate-900"
                            >
                                Thread Message *
                            </label>
                            <div className="mt-2">
                                <div
                                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <textarea
                                        name="threadMessage"
                                        id="threadMessage"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 min-h-[120px] text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6 resize-y"
                                        placeholder="What's your build about? Share your mods, upgrades, and experiences!"
                                        value={form.threadMessage}
                                        onChange={(e) => updateForm({threadMessage: e.target.value})}
                                        required={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label className="block text-sm font-medium leading-6 text-slate-900">
                                Attach Images
                            </label>
                            <button
                                type="button"
                                onClick={triggerFileInput}
                                className="mb-2 px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 active:bg-indigo-800 transition"
                            >
                                Choose Files
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {form.images.map((img, idx) => (
                                    <div key={idx} className="relative">
                                        <img src={img} alt={`Preview ${idx}`} className="max-h-40 mb-2 rounded" />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(idx)}
                                            className="absolute top-1 right-1 px-2 py-1 bg-red-500 text-white rounded text-xs"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                <input
                    type="submit"
                    value="Save Thread"
                    className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
                />
            </form>
            <Footer/>
        </>
    );
}