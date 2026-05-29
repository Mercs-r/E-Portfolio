import { motion } from "framer-motion";

export default function Education() {

  const educationData = [

      {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Computer Applications",
    institution: "Vishwakarma Institute of Technology (VIT), Pune",
    duration: "2021 - 2023",
    score: "CGPA: 8.44",

    description:
      "Focused on advanced computing concepts including Data Analytics, Machine Learning, Artificial Intelligence, Database Systems, and Software Engineering.",

    subjects: [
      "Machine Learning",
      "Artificial Intelligence",
      "Big Data Analytics",
      "Database Management Systems",
      "Cloud Computing",
      "Software Engineering",
    ],
  },

   {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Computer Applications",
    institution: "Moolji Jaitha College, Jalgaon",
    duration: "2018 - 2021",
    score: "CGPA: 9.25",

    description:
      "Built strong fundamentals in programming, data structures, databases, and software development with excellent academic performance.",

    subjects: [
      "Programming Fundamentals",
      "Python",
      "Java",
      "Database Systems",
      "Web Development",
      "Computer Networks",
    ],
  },

];


  return (
    <motion.section
      id="education"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-blue-500/30 ml-4 space-y-16">

          {educationData.map((edu, index) => (

            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className="relative pl-10"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50"></div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">

                {/* Top */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div>

                    <h3 className="text-3xl font-bold text-white">
                      {edu.degree}
                    </h3>

                    <p className="text-blue-400 text-lg mt-2">
                      {edu.specialization}
                    </p>

                  </div>

                  <div className="text-gray-300">

                    <p>
                      📅 {edu.duration}
                    </p>

                    <p className="mt-2 text-cyan-300 font-semibold">
                      {edu.score}
                    </p>

                  </div>

                </div>

                {/* Institution */}
                <p className="text-gray-300 mt-6 text-lg">
                  🏫 {edu.institution}
                </p>

                {/* Description */}
                <p className="text-gray-400 mt-6 leading-8">
                  {edu.description}
                </p>

                {/* Subjects */}
                <div className="mt-8">

                  <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                    Relevant Subjects
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {edu.subjects.map((subject, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-xl text-sm"
                      >
                        {subject}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  );
}