// ==============================
// Hero.jsx
// ==============================

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left */}
        <div>

          <p className="text-blue-400 text-xl mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Rutik Kadam
          </h1>

          <TypeAnimation
            sequence={[
              "Data Analyst",
              2000,
              "Data Scientist",
              2000,
              "AI Enthusiast",
              2000,
              "Big Data Engineer",
              2000,
              "ML Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-blue-400 font-semibold mt-6 block"
          />

          <p className="mt-8 text-gray-300 leading-8 text-lg max-w-2xl">
            Passionate about building scalable analytics,
            automation workflows, AI-powered solutions,
            and business intelligence dashboards using
            Python, SQL, Spark, Power BI, and Machine Learning.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-gray-300">

            <a
              href="mailto:rutikkadam837@gmail.com"
              className="hover:text-blue-400 transition"
            >
              📧 rutikkadam837@gmail.com
            </a>

            <p>India
            </p>

          </div>

          <div className="flex gap-4 mt-10 flex-wrap">

            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:scale-110 hover:-translate-y-1 active:scale-95 transition duration-300 shadow-lg shadow-blue-500/30"
            >
               Resume
            </a>

            <a
              href="#projects"
              className="border border-slate-700 hover:border-blue-400 px-8 py-4 rounded-2xl transition"
            >
              View Projects
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <div className="relative w-72 h-72 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-8xl shadow-2xl">
              🚀
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}