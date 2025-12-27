import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900/90 py-10  text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-2xl font-bold mb-4 text-red-500">
                    Faiziii
                </h2>

                <div className="flex justify-center gap-6 mb-6 text-gray-300">
                    <a href="#" className="hover:text-red-500 transition-colors duration-300">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="hover:text-red-500 transition-colors duration-300">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="hover:text-red-500 transition-colors duration-300">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="hover:text-red-500 transition-colors duration-300">
                        <Twitter size={24} />
                    </a>
                </div>

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} faiziii.hub — All rights reserved
                </p>

                <p className="text-xs text-gray-500 mt-1">
                    Made with ❤️ using React & Tailwind
                </p>
            </div>
        </footer>
    );
}
