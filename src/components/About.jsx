import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-3 md:px-5 flex flex-col md:flex-row items-center gap-10">
                {/* Left Side - Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <img
                        src="/images/Untitled design-Photoroom.png"
                        alt="Faiz"
                        className="w-64 md:w-80 rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right Side - Text & Tabs */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-red-500">About Me</h1>
                    <p className="text-gray-300 leading-relaxed">
                        Hello! I'm Faiz, a passionate MERN Stack Developer with expertise in building modern, responsive,
                        and high-performance web applications. I specialize in React.js for frontend, Node.js & Express for backend,
                        and MongoDB for database management. My goal is to create seamless web experiences with clean, maintainable
                        code. I enjoy turning ideas into real, functional web solutions and continuously learning new technologies
                        to stay updated in the web development world.
                    </p>

                    {/* Tab Titles */}
                    <div className="flex gap-6 border-b border-gray-700 pb-2">
                        {["skills", "experience", "education"].map((tab) => (
                            <button
                                key={tab}
                                className={`capitalize font-semibold ${activeTab === tab ? "text-red-500 border-b-2 border-red-500" : "text-gray-400"
                                    } transition-colors duration-300`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Contents */}
                    <div className="mt-4">
                        {activeTab === "skills" && (
                            <ul className="list-disc pl-5 space-y-3 text-gray-300">
                                <li>
                                    <span className="font-semibold">Frontend:</span> React.js, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap
                                </li>
                                <li>
                                    <span className="font-semibold">Backend:</span> Node.js, Express.js
                                </li>
                                <li>
                                    <span className="font-semibold">Database:</span> MongoDB, Mongoose
                                </li>
                                <li>
                                    <span className="font-semibold">Tools:</span> Git, GitHub, VS Code, Postman, Figma
                                </li>
                            </ul>
                        )}
                        {activeTab === "experience" && (
                            <ul className="list-disc pl-5 space-y-3 text-gray-300">
                                <li>
                                    <span className="font-semibold">Freelance Developer:</span> Built small and medium projects using MERN stack.
                                </li>
                                <li>
                                    <span className="font-semibold">Portfolio Projects:</span> Responsive web apps, interactive dashboards, and e-commerce sites.
                                </li>
                            </ul>
                        )}
                        {activeTab === "education" && (
                            <ul className="list-disc pl-5 space-y-3 text-gray-300">
                                <li>
                                    <span className="font-semibold">Bachelor's in Information Technology:</span> University of Sindh, currently in 3rd semester
                                </li>
                                <li>
                                    <span className="font-semibold">Intermediate:</span> GDC Qazi Arif, 2022
                                </li>
                                <li>
                                    <span className="font-semibold">Matric:</span> BISE Larkana, 2020
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
