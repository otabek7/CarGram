// client/src/components/Footer.jsx
export default function Footer() {
    return (
        <footer className="w-full bg-white/70 backdrop-blur-md border-t border-indigo-200 py-6 mt-12 flex flex-col items-center">
            <span className="text-gray-700 font-semibold text-lg">
                © {new Date().getFullYear()} CarGram. All rights reserved.
            </span>
            <div className="mt-2 flex space-x-4">
                <a href="https://github.com/otabek7" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                    GitHub
                </a>
                <a href="/" className="text-indigo-600 hover:underline">
                    About
                </a>
            </div>
        </footer>
    );
}