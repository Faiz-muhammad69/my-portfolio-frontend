import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
            <img
                src="/images/Faiziii.web.png"
                alt="Logo"
                className="w-[140px]"
            />

            <ul
                className={`md:flex md:items-center md:gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-black/70 md:bg-transparent transition-all duration-300 ${open ? "block" : "hidden"
                    }`}
            >
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                    <li
                        key={item}
                        className="text-white text-base md:text-sm text-center py-2 md:py-0 border-b md:border-none border-gray-700 md:border-0"
                    >
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-red-400 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <button
                className="md:hidden text-white text-xl focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                {open ? "✕" : "☰"}
            </button>
        </nav>
    );
}
