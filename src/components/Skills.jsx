import { motion } from "framer-motion";

export default function Skills() {

  const skillCategories = [

    {
      title: "Programming",
      icon: "💻",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 75 },
      ],
    },

    {
      title: "Data Analysis",
      icon: "📊",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "EDA", level: 88 },
        { name: "Statistical Analysis", level: 82 },
        { name: "Data Cleaning", level: 92 },
      ],
    },

    {
      title: "Machine Learning & AI",
      icon: "🤖",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "NLP", level: 88 },
        { name: "Computer Vision", level: 80 },
        { name: "Generative AI", level: 85 },
        { name: "Prompt Engineering", level: 90 },
      ],
    },

    {
      title: "Big Data",
      icon: "⚡",
      skills: [
        { name: "Apache Spark", level: 88 },
        { name: "Apache Zeppelin", level: 84 },
      ],
    },

    {
      title: "Visualization",
      icon: "📈",
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 80 },
        { name: "Matplotlib", level: 88 },
        { name: "Seaborn", level: 84 },
      ],
    },

    {
      title: "Tools & Automation",
      icon: "🛠️",
      skills: [
        { name: "Excel", level: 90 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "Streamlit", level: 88 },
        { name: "Selenium", level: 82 },
        { name: "Automation", level: 85 },
      ],
    },

  ];

  return (
    <motion.section
      id="skills"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >

              {/* Category Title */}
              <div className="flex items-center gap-4 mb-8">

                <div className="text-4xl">
                  {category.icon}
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="space-y-6">

                {category.skills.map((skill, i) => (

                  <div key={i}>

                    {/* Name + % */}
                    <div className="flex justify-between mb-2">

                      <span className="text-gray-200 font-medium">
                        {skill.name}
                      </span>

                      <span className="text-blue-400">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}