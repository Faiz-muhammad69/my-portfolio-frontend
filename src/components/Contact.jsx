import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ message: "", success: null });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://backend-repo-production-bd37.up.railway.app/api/contact", formData);
            setStatus({ message: "Message sent successfully ✅", success: true });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus({ message: "Something went wrong ❌", success: false });
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-10 text-center text-red-500">
                Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                    Send Message
                </button>

                {status.message && (
                    <p
                        className={`mt-2 text-center ${status.success ? "text-green-400" : "text-red-400"
                            }`}
                    >
                        {status.message}
                    </p>
                )}
            </form>
        </section>
    );
}
