import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import CreateThread from "./components/CreateThread.jsx";
import ThreadList from "./components/ThreadList.jsx";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery.jsx";
import "./index.css";
import ThreadView from "./components/ThreadView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
        ],
    },
    {
        path: "/edit/:id",
        element: <App/>,
        children: [
            {
                path: "/edit/:id",
                element: <CreateThread/>,
            },
        ],
    },
    {
        path: "/thread/:id",
        element: <App/>,
        children: [
            {
                path: "/thread/:id",
                element: <ThreadView/>,
            },
        ],
    },
    {
        path: "/create",
        element: <App/>,
        children: [
            {
                path: "/create",
                element: <CreateThread/>,
            },
        ],
    },
    {
        path: "/gallery",
        element: <App/>,
        children: [
            {
                path: "/gallery",
                element: <Gallery/>,
            },
        ],
    },
    {
        path: "/forums",
        element: <App/>,
        children: [
            {
                path: "/forums",
                element: <ThreadList/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);