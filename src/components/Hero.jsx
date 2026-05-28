import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold"
        >
          Rutik Kadam
        </motion.h1>

        <p className="mt-4 text-xl text-gray-400">
          Data Analyst | AI & Big Data Enthusiast
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="/resume.pdf"
            className="bg-blue-500 px-6 py-3 rounded-xl"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Mercs-r"
            className="border border-white px-6 py-3 rounded-xl"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
