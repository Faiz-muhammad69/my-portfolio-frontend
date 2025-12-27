import { useState } from "react";
import { FaCode, FaCogs, FaDesktop, FaDatabase } from "react-icons/fa";

export default function Services() {
    const initialServices = [
        {
            icon: <FaCode size={40} className="text-red-500 mb-4" />,
            title: "Frontend Development",
            short: "I build responsive, interactive websites using React.js, Tailwind CSS, and modern frontend tools.",
            full: "I create visually appealing and high-performance web experiences that work seamlessly across all devices. I focus on clean, optimized, and maintainable code to ensure top-notch quality.",
        },
        {
            icon: <FaCogs size={40} className="text-red-500 mb-4" />,
            title: "Backend & API Development",
            short: "I develop robust backend systems and RESTful APIs using Node.js and Express.js.",
            full: "I handle server-side logic, database connections with MongoDB, and integration with frontend apps. My backend solutions are secure, scalable, and optimized for performance.",
        },
        {
            icon: <FaDesktop size={40} className="text-red-500 mb-4" />,
            title: "Full-Stack Web Applications",
            short: "I build complete MERN stack applications from scratch with frontend, backend, and database.",
            full: "From dynamic dashboards, e-commerce platforms to social apps, I create fully functional web applications with seamless user experience and responsive design.",
        },
        {
            icon: <FaDatabase size={40} className="text-red-500 mb-4" />,
            title: "Deployment & Maintenance",
            short: "I deploy websites and apps to platforms like Vercel, Netlify, and Heroku.",
            full: "I ensure smooth deployment, domain setup, SSL configuration, and regular maintenance. I also optimize websites for speed, performance, and bug-free user experience.",
        },
    ];

    const [expanded, setExpanded] = useState(Array(initialServices.length).fill(false));

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <section id="services" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-3 md:px-5">
                <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-10 text-center md:text-left">
                    My Services
                </h1>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {initialServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
                        >
                            <div className="flex justify-center md:justify-start">{service.icon}</div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center md:text-left">
                                {service.title}
                            </h2>
                            <p className="text-gray-300 text-sm md:text-base">
                                {expanded[index] ? service.full : service.short}
                            </p>
                            <button
                                onClick={() => toggleExpand(index)}
                                className="mt-4 text-red-500 font-semibold hover:underline self-start"
                            >
                                {expanded[index] ? "Show Less" : "Read More"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
