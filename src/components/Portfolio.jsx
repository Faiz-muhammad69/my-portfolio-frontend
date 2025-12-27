export default function Portfolio() {
    const projects = [
        {
            title: "Sales and Management System",
            image: "/images/sales.png",
            description:
                "Built a desktop app using Electron, HTML, CSS & JS for sales tracking and inventory management. Includes a dynamic dashboard to monitor sales data and manage products.",
            link: "https://drive.google.com/file/d/143LEYKYT3KWR6H9ZifnXCJ2QpunR-GJY/view", // Replace with actual live link
        },
        {
            title: "Flappy Bird Quest",
            image: "/images/game.jpg",
            description:
                "Multi-level Flappy Bird clone built with HTML, CSS & JS. Features game physics, collision detection, scoring system, and interactive gameplay.",
            link: "https://faiziiigame.netlify.app/",
        },
        {
            title: "Kia Motors Task",
            image: "/images/kia.jpg",
            description:
                "Completed a web-based task for Kia Motors demonstrating frontend & backend integration and professional web development standards.",
            link: "https://kiaproject.netlify.app/",
        },
        {
            title: "Personal Portfolio",
            image: "/images/portfolio.png",
            description:
                "Professional online portfolio to showcase skills, projects, and contact form. Fully responsive and visually appealing layout.",
            link: "https://faiziiiportfolio.netlify.app/",
        },
    ];

    return (
        <section id="portfolio" className="py-20 px-6 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center text-red-500">
                My Work
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group rounded-lg overflow-hidden shadow-lg bg-black/30 hover:shadow-2xl transition-all duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                            >
                                View Live
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
