import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Get In Touch
        </h2>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 max-w-2xl mx-auto text-center">

          <p className="text-gray-300 text-xl leading-9 mb-8">
            I'm actively looking for opportunities in{" "}
            <span className="text-blue-400 font-semibold">
              Data Analytics, Data Science, and AI
            </span>
            . Feel free to reach out!
          </p>

          <a
            href="mailto:rutikkadam837@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition duration-300 mb-10"
          >
            📧 rutikkadam837@gmail.com
          </a>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Mercs-r"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 border border-white/10 px-6 py-3 rounded-2xl hover:border-blue-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rutik-kadam-252b39243"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 border border-white/10 px-6 py-3 rounded-2xl hover:border-blue-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
