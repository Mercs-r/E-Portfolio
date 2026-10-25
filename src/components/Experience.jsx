import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analyst",
    company: "Need-Data",
    period: "Aug 2024 – Aug 2025",
    bullets: [
      "Conducted EDA on large datasets to identify trends and insights.",
      "Developed automated reporting solutions using Python, reducing manual work by 40%.",
      "Built interactive Power BI dashboards for KPI monitoring.",
      "Collaborated with teams to deliver business intelligence solutions.",
      "Improved workflows through automation and analytical reporting.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Encryptix",
    period: "Jan 2024 – Jul 2024",
    bullets: [
      "Optimized SQL queries for reporting efficiency.",
      "Automated preprocessing workflows using Python.",
      "Assisted in predictive analytics and ML reporting.",
      "Maintained technical documentation and reporting standards.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-blue-500/30 ml-4 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute -left-[14px] top-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50" />

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role} — {exp.company}
                    </h3>
                  </div>
                  <p className="text-blue-400 whitespace-nowrap">{exp.period}</p>
                </div>

                <ul className="mt-6 space-y-3 text-gray-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
