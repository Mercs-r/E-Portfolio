import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Main Card */}
        <div className="grid grid-cols-1 gap-10 items-start">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">

            <h3 className="text-4xl font-bold text-white mb-6">
              Data Analyst & Data Scientist
            </h3>

            <p className="text-gray-300 leading-10 text-xl">

              I am a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Data Analyst and aspiring Data Scientist
              </span>{" "}
              focused on transforming raw data into actionable insights,
              scalable analytics systems, and AI-powered solutions.

              <br /><br />

              My expertise includes building intelligent applications using{" "}
              <span className="text-cyan-300">
                Python, SQL, Machine Learning, Apache Spark,
                Zeppelin, Power BI, NLP, Deep Learning,
                and Generative AI
              </span>{" "}
              to solve real-world business challenges efficiently.

              <br /><br />

              I have worked on projects involving Big Data analytics,
              predictive machine learning models, NLP-based text
              classification, computer vision systems, and automation
              workflows that improve operational efficiency and
              decision-making.

              <br /><br />

              I enjoy working on end-to-end analytics pipelines including
              data cleaning, exploratory data analysis (EDA),
              dashboarding, model development, visualization,
              and scalable distributed computing systems.

              <br /><br />

              Currently, I am actively exploring opportunities in{" "}
              <span className="text-blue-400 font-semibold">
                Data Analytics, Data Science, Artificial Intelligence,
                and Big Data Engineering
              </span>{" "}
              where I can contribute analytical thinking,
              technical expertise, and innovative problem-solving skills.

            </p>

          </div>

        </div>

      </div>

    </motion.section>
  );
}