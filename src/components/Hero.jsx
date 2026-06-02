
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >

  
   
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

   
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-[140px] opacity-20 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-[140px] opacity-20 animate-pulse"></div>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-8 backdrop-blur-xl">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            Open To Opportunities

          </div>


          <p className="text-blue-400 text-2xl mb-4">
            Hello, I'm
          </p>

        
          <h3 className="text-2xl md:text-6xl font-extrabold leading-tight text-white">
            Rutik
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
              Kadam
            </span>
          </h3>


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
              "Machine Learning Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-8 text-3xl md:text-4xl font-semibold text-blue-400"
          />

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-2xl">
            Passionate about transforming raw data into actionable insights
            through Data Analytics, Machine Learning, Big Data, Power BI,
            Apache Spark, and Generative AI. Focused on building scalable,
            intelligent, and business-driven solutions.
          </p>

   
          <div className="mt-8 space-y-3 text-gray-300">
            <p>📧 rutikkadam837@gmail.com</p>
            <p>📍 India</p>
          </div>


          <div className="flex flex-wrap gap-5 mt-10">

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/30"
            >
              Resume
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-700 hover:border-blue-400 px-8 py-4 rounded-2xl backdrop-blur-xl"
            >
              View Projects
            </motion.a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                10+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">
               1.7+
              </h3>
              <p className="text-gray-400">
                Expirence
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                8+
              </h3>
              <p className="text-gray-400">
                Certifications
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">
                8.44
              </h3>
              <p className="text-gray-400">
                MCA CGPA
              </p>
            </div>

          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
 
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>


            <img
              src="/profile.jpg"
              alt="Rutik Kadam"
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-400 shadow-2xl"
            />

            <div className="absolute -top-4 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl">
              <p className="text-blue-400 font-semibold">
                Python • SQL • Machine Learning • PowerBI 
              </p>
            </div>

            <div className="absolute bottom-0 -right-8 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl">
              <p className="text-cyan-300 font-semibold">
                Spark • AI •Zepplin •Databricks
              </p>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
