import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

const projects = [
  {
    title: "Olympic Player Analytics",
    category: "Big Data Analytics",
    duration: "3 Months",
    status: "Completed",

    tech: [
      "Apache Spark",
      "Apache Zeppelin",
      "Python",
      "Machine Learning",
      "SQL",
      "Big Data",
    ],

    description:
      "Large-scale analytics platform for processing and analyzing Olympic athlete performance datasets.",

    longDescription:
      "Designed and developed a scalable analytics solution using Apache Spark and Zeppelin to process large Olympic datasets. Built distributed data processing workflows, performed exploratory data analysis, generated visual insights, and applied machine learning techniques to identify athlete performance patterns and trends.",

    features: [
      "Distributed Data Processing using Apache Spark",
      "Interactive Data Exploration with Zeppelin",
      "Performance Trend Analysis",
      "Machine Learning-Based Insights",
      "Data Visualization Dashboards",
      "Scalable Analytics Pipelines",
    ],

    achievements: [
      "Processed thousands of athlete records efficiently using distributed computing",
      "Reduced analysis time through Spark parallelization",
      "Improved insight generation with interactive notebooks",
    ],

    metrics: [
      "50% Faster Data Processing",
      "10K+ Records Analyzed",
      "Scalable Big Data Pipeline",
    ],

    github: "https://github.com/Mercs-r",

    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
  },

  {
    title: "Fire Detection System",
    category: "Deep Learning",
    duration: "2 Months",
    status: "Completed",

    tech: [
      "CNN",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "Python",
    ],

    description:
      "Real-time fire detection solution powered by Deep Learning and Computer Vision.",

    longDescription:
      "Developed an intelligent fire detection system using Convolutional Neural Networks (CNN) and PyTorch. The model identifies fire incidents from image streams in real-time, enabling faster response times and enhanced safety monitoring.",

    features: [
      "Real-time Image Classification",
      "CNN Architecture",
      "Computer Vision Pipeline",
      "Data Augmentation",
      "PyTorch Model Training",
      "Automated Detection Workflow",
    ],

    achievements: [
      "Achieved high image classification accuracy",
      "Built efficient fire recognition pipeline",
      "Improved monitoring automation capabilities",
    ],

    metrics: [
      "90%+ Detection Accuracy",
      "Real-time Processing",
      "Reduced Manual Monitoring",
    ],

    github: "https://github.com/Mercs-r",

    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },

  {
    title: "Car Price Prediction Web App",
    category: "Machine Learning",
    duration: "1 Month",
    status: "Completed",

    tech: [
      "Python",
      "Scikit-Learn",
      "Streamlit",
      "Pandas",
      "Machine Learning",
    ],

    description:
      "Machine Learning application for predicting vehicle prices using historical market data.",

    longDescription:
      "Built and deployed a predictive analytics web application that estimates vehicle prices using machine learning algorithms. Developed an interactive Streamlit interface for real-time predictions and user-friendly visualization.",

    features: [
      "Regression Model Training",
      "Interactive Streamlit Interface",
      "Data Cleaning Pipeline",
      "Feature Engineering",
      "Model Deployment",
      "Prediction Dashboard",
    ],

    achievements: [
      "Automated vehicle valuation process",
      "Improved pricing estimation efficiency",
      "Delivered user-friendly analytics interface",
    ],

    metrics: [
      "Instant Price Predictions",
      "End-to-End ML Deployment",
      "Interactive Dashboard",
    ],

    github: "https://github.com/Mercs-r",

    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },

  {
    title: "Movie Genre Classification",
    category: "Natural Language Processing",
    duration: "2 Months",
    status: "Completed",

    tech: [
      "Python",
      "NLP",
      "Text Classification",
      "Scikit-Learn",
      "Feature Engineering",
    ],

    description:
      "NLP-powered system for automatically classifying movie genres from text descriptions.",

    longDescription:
      "Developed a Natural Language Processing solution capable of predicting movie genres from textual summaries. Applied text preprocessing, TF-IDF vectorization, feature engineering, and machine learning classification models to improve prediction accuracy.",

    features: [
      "Text Preprocessing",
      "TF-IDF Vectorization",
      "Feature Engineering",
      "Automated Classification",
      "Machine Learning Pipeline",
      "Genre Prediction Engine",
    ],

    achievements: [
      "Improved classification performance using NLP techniques",
      "Built reusable text-processing workflow",
      "Enhanced model accuracy through feature engineering",
    ],

    metrics: [
      "Automated Genre Prediction",
      "NLP-Based Classification",
      "Scalable Text Pipeline",
    ],

    github: "https://github.com/Mercs-r",

    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
];

  return (
    <section
      id="projects"
      className="py-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-6">

                <p className="text-blue-400 text-sm mb-3">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-7 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-xl text-xs"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Popup Modal */}
        <AnimatePresence>

          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-900 border border-white/10 rounded-3xl max-w-4xl w-full overflow-y-auto max-h-[90vh] shadow-2xl"
              >

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">

                  {/* Header */}
                  <div className="flex justify-between items-start">

                    <div>

                      <p className="text-blue-400 mb-3">
                        {selectedProject.category}
                      </p>

                      <h3 className="text-4xl font-bold text-white">
                        {selectedProject.title}
                      </h3>

                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-red-400 text-3xl"
                    >
                      ✕
                    </button>

                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mt-8 leading-8 text-lg">
                    {selectedProject.longDescription}
                  </p>

                  {/* Tech */}
                  <div className="mt-10">

                    <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-xl"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Features */}
                  <div className="mt-10">

                    <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                      Key Features
                    </h4>

                    <ul className="space-y-4 text-gray-300">

                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>
                          🚀 {feature}
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* Impact */}
                  <div className="mt-10">

                    <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                      Project Impact
                    </h4>

                    <ul className="space-y-4 text-gray-300">

                      {selectedProject.achievements.map((item, i) => (
                        <li key={i}>
                          📈 {item}
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-12 flex-wrap">

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
                    >
                      View GitHub
                    </a>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="border border-white/10 px-8 py-4 rounded-2xl hover:border-blue-400 transition"
                    >
                      Close
                    </button>

                  </div>

                </div>

              </motion.div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}