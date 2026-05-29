import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Olympic Player Analytics",
      category: "Big Data Analytics",
      tech: [
        "Apache Spark",
        "Zeppelin",
        "Machine Learning",
        "Python",
        "SQL",
      ],

      description:
        "Large-scale Olympic player performance analytics system using Apache Spark and Zeppelin.",

      longDescription:
        "Built a scalable analytics platform to process and analyze Olympic athlete datasets using Apache Spark distributed computing. Used Zeppelin notebooks for interactive analysis, data visualization, and machine learning workflows on large-scale sports datasets.",

      features: [
        "Distributed Data Processing using Spark",
        "Interactive Zeppelin Notebook Analysis",
        "Large-scale Dataset Handling",
        "ML-based Athlete Performance Insights",
        "Scalable Analytics Pipelines",
        "Data Visualization & Reporting",
      ],

      achievements: [
        "Processed large datasets efficiently using distributed computing",
        "Improved analytical scalability and performance",
        "Built interactive notebook-based analytics workflows",
      ],

      github: "https://github.com/Mercs-r",

      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },

    {
      title: "Fire Detection System",
      category: "Deep Learning",

      tech: [
        "CNN",
        "PyTorch",
        "Deep Learning",
        "Computer Vision",
        "Python",
      ],

      description:
        "Real-time deep learning system for automatic fire detection using CNN models.",

      longDescription:
        "Developed a real-time fire detection system using Convolutional Neural Networks and PyTorch. The model performs image classification tasks to identify fire incidents accurately and efficiently for safety monitoring applications.",

      features: [
        "Real-time Fire Detection",
        "CNN-based Image Classification",
        "PyTorch Deep Learning Pipeline",
        "High Accuracy Detection",
        "Image Preprocessing & Augmentation",
        "Safety Monitoring Workflow",
      ],

      achievements: [
        "Achieved high image classification accuracy",
        "Built real-time detection pipeline",
        "Improved response efficiency for fire monitoring",
      ],

      github: "https://github.com/Mercs-r",

      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },

    {
      title: "Car Price Prediction Web App",
      category: "Machine Learning",

      tech: [
        "Python",
        "Machine Learning",
        "Streamlit",
        "Scikit-learn",
        "Pandas",
      ],

      description:
        "Interactive machine learning web application for predicting car prices.",

      longDescription:
        "Developed and deployed a machine learning-powered web application capable of predicting car prices based on various vehicle attributes. Designed an interactive Streamlit interface for user-friendly prediction and visualization.",

      features: [
        "Regression-based Prediction Model",
        "Interactive Streamlit UI",
        "Real-time Price Prediction",
        "Data Cleaning & Feature Engineering",
        "ML Model Deployment",
        "User-friendly Dashboard",
      ],

      achievements: [
        "Successfully deployed ML model as web application",
        "Built intuitive and responsive user interface",
        "Improved prediction workflow automation",
      ],

      github: "https://github.com/Mercs-r",

      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },

    {
      title: "Movie Genre Classification",
      category: "Natural Language Processing",

      tech: [
        "NLP",
        "Python",
        "Machine Learning",
        "Text Processing",
        "Scikit-learn",
      ],

      description:
        "NLP-based automated movie genre classification system using text analytics.",

      longDescription:
        "Built a Natural Language Processing model capable of automatically classifying movie genres based on textual descriptions. Applied advanced text preprocessing, feature engineering, and machine learning techniques for accurate classification.",

      features: [
        "Automated Genre Prediction",
        "Text Preprocessing Pipeline",
        "Feature Engineering",
        "NLP-based Classification",
        "Machine Learning Workflow",
        "Dataset Cleaning & Transformation",
      ],

      achievements: [
        "Improved classification efficiency using NLP techniques",
        "Built scalable text preprocessing workflow",
        "Enhanced prediction accuracy through feature engineering",
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