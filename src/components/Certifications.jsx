import { motion } from "framer-motion";

export default function Certifications() {

  const certificates = [

    {
      title: "Python Programming Certification",
      provider: "Professional Certification",
      icon: "🐍",
      skills: [
        "Python",
        "Automation",
        "Scripting",
        "Problem Solving",
      ],
    },

    {
      title: "SQL for Data Analytics",
      provider: "Database & Analytics",
      icon: "🗄️",
      skills: [
        "SQL",
        "Database Management",
        "Query Optimization",
        "Data Analysis",
      ],
    },

    {
      title: "Java Programming",
      provider: "Software Development",
      icon: "☕",
      skills: [
        "Java",
        "OOP",
        "DSA",
        "Backend Development",
      ],
    },

    {
      title: "Machine Learning Certification",
      provider: "AI & ML",
      icon: "🤖",
      skills: [
        "Scikit-learn",
        "Model Training",
        "ML Algorithms",
        "Prediction Systems",
      ],
    },

    {
      title: "Power BI Data Visualization",
      provider: "Business Intelligence",
      icon: "📊",
      skills: [
        "Power BI",
        "Dashboards",
        "Data Visualization",
        "Business Analytics",
      ],
    },

    {
      title: "Selenium Automation Testing",
      provider: "Automation Engineering",
      icon: "⚙️",
      skills: [
        "Selenium",
        "Automation",
        "Testing",
        "Web Automation",
      ],
    },

    {
      title: "Web Scraping with Python",
      provider: "Data Extraction",
      icon: "🕸️",
      skills: [
        "Web Scraping",
        "BeautifulSoup",
        "Data Extraction",
        "Python Automation",
      ],
    },

    {
      title: "Hydra Generative AI Workshop",
      provider: "Generative AI",
      icon: "🧠",
      skills: [
        "Generative AI",
        "Prompt Engineering",
        "LLMs",
        "AI Applications",
      ],
    },

  ];

  return (
    <motion.section
      id="certifications"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Certifications
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {certificates.map((cert, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >

              {/* Icon */}
              <div className="text-5xl mb-6">
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white leading-snug">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="text-blue-400 mt-4">
                {cert.provider}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6">

                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-3 py-2 rounded-xl text-xs"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}