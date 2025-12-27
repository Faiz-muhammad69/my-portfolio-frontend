import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-orange-500 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import { ReactTyped } from "react-typed";
// import { Send, Phone, Linkedin, Instagram, Github, ExternalLink, Code, Crop, Layout } from 'lucide-react';

// const App = () => {
//   const [activeTab, setActiveTab] = useState('skills');
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   // Form Submit Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setStatus('Message sent successfully! ✅');
//         setFormData({ name: '', email: '', message: '' });
//       }
//     } catch (error) {
//       setStatus('Server Error! ❌');
//     }
//   };

//   return (
//     <div>
//       {/* --- HERO SECTION --- */}
//       <header className="h-screen flex items-center px-[10%] bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed relative">
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10">
//           <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm <span className="text-primary">Faiz</span> Muhammad</h1>
//           <p className="text-2xl mt-4 h-10">
//             <ReactTyped
//               strings={['I am a Web Developer', 'I am a UI/UX Designer', 'I am a MERN Developer']}
//               typeSpeed={50} backSpeed={50} loop
//             />
//           </p>
//         </div>
//       </header>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="py-20 px-[10%]">
//         <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
//           <img src="images/Untitled design-Photoroom.png" className="rounded-2xl border-2 border-primary shadow-2xl" alt="Faiz" />
//           <div>
//             <h2 className="text-5xl font-bold mb-6">About Me</h2>
//             <p className="text-gray-300 mb-8">I am a MERN stack developer from Sindh, Pakistan, focused on building clean and functional web experiences.</p>

//             <div className="flex gap-6 mb-6 border-b border-gray-700">
//               {['skills', 'experience', 'education'].map(tab => (
//                 <button key={tab} onClick={() => setActiveTab(tab)}
//                   className={`pb-2 capitalize transition-all ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}>
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="min-h-[100px]">
//               {activeTab === 'skills' && (
//                 <ul className="grid grid-cols-2 gap-2">
//                   <li><span className="text-primary font-bold">Frontend:</span> React.js, Tailwind, JS</li>
//                   <li><span className="text-primary font-bold">Backend:</span> Node.js, MongoDB</li>
//                 </ul>
//               )}
//               {activeTab === 'education' && (
//                 <p>BS IT - University of Sindh (Ongoing)</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES SECTION --- */}
//       <section className="py-20 px-[10%] bg-cardBg/30">
//         <h2 className="text-5xl font-bold text-center mb-12">My Services</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { title: "Web Dev", icon: <Code />, desc: "High performance React apps." },
//             { title: "UI/UX", icon: <Layout />, desc: "Modern Figma designs." },
//             { title: "Graphics", icon: <Crop />, desc: "Branding & Social Media." }
//           ].map((s, i) => (
//             <div key={i} className="p-8 bg-cardBg rounded-xl hover:-translate-y-2 transition-all border-b-4 border-transparent hover:border-primary group">
//               <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
//               <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
//               <p className="text-gray-400">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <section className="py-20 px-[10%]">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
//             <div className="space-y-4">
//               <p className="flex items-center gap-3"><Send className="text-primary" /> faiz@example.com</p>
//               <p className="flex items-center gap-3"><Phone className="text-primary" /> +923263447981</p>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input type="text" placeholder="Name" className="w-full p-4 bg-cardBg rounded-lg outline-none border border-transparent focus:border-primary"
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//             <input type="email" placeholder="Email" className="w-full p-4 bg-cardBg rounded-lg outline-none border border-transparent focus:border-primary"
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
//             <textarea placeholder="Message" rows="5" className="w-full p-4 bg-cardBg rounded-lg outline-none border border-transparent focus:border-primary"
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
//             <button className="bg-primary px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all">Submit Now</button>
//             <p className="text-green-500 mt-2">{status}</p>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;