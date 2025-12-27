import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-20 pb-2 md:pt-0 md:pb-2 h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white"
        >
            {/* Left Side - Text + Social + Button */}
            <div className="flex-1 text-center md:text-left animate-fadeIn mt-10 md:mt-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm <span className="text-red-500">Faiz</span> Muhammad
                </h1>

                <ReactTyped
                    strings={["Web Developer", "Freelancer", "UI/UX Designer"]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                    className="text-lg md:text-xl mt-2 block mb-6"
                />

                {/* Social Icons */}
                <div className="flex justify-center md:justify-start gap-4 mb-6">
                    <a
                        href="https://www.linkedin.com/in/faiz-muhammad-3b0647331"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors duration-300 text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/faiziii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors duration-300 text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com/faiziii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl"
                    >
                        <FaTwitter />
                    </a>
                </div>

                {/* Download CV Button */}
                <a
                    href="/files/faiz-cv.pdf"
                    download
                    className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                    Download CV
                </a>
            </div>

            {/* Right Side - Hero Image */}
            <div className="flex-1 flex justify-center md:justify-end animate-fadeIn">
                <img
                    src="/images/hero1.png"
                    alt="Hero"
                    className="w-[300px] md:w-[400px] lg:w-[500px] object-contain rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
                />
            </div>
        </section>
    );
}
