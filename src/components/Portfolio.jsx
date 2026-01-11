export default function Portfolio() {
    const projects = [
        {
            title: "OmniStore POS – Offline-First Retail Solution",
            image: "/images/sale management system.png",
            description: "I built this system for businesses where 100% internet uptime isn't guaranteed. It allows shopkeepers to perform high-speed billing and inventory tracking offline, while automatically securing their data to the cloud during closing hours.Tech Stack: React.js | Electron.js | Node.js | NeDB | Cloud Mirroring ",
            link: "https://drive.google.com/file/d/1Abm0Q_cKsVanFESMbnYHIN46y6zTHwO1/view?usp=sharing", // Replace with actual live link
        },
        {
            title: "School Account management System ",
            image: "/images/school management.png",
            description:
                "A robust desktop application built with Electron.js and SQLite to digitize school operations. It replaces manual registers with a high-performance system designed to work 100% offline, ensuring data security and zero latency. Tech Stack: JavaScript | Electron.js | SQLite | Node.js",
            link: "https://drive.google.com/file/d/1uQiEmeInl3SRsHXQDFtef140Vz_VGEQf/view?usp=sharing", // Replace with actual live link
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
                                View Live/download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
