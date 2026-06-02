// ==============================
// Research.jsx
// ==============================

import { motion } from "framer-motion";

export default function Research() {
  const publications = [
    {
      title: "OCR-Based Cheque Validation Using Image Processing",
      conference: "ICNTE 2023",
      status: "Published",
      publicationLink: "https://ieeexplore.ieee.org/document/10146687", 
      description:
        "Published research focused on automating cheque verification using Optical Character Recognition (OCR) and Image Processing techniques.",

      longDescription:
        "This research proposed an intelligent cheque validation system capable of extracting, processing, and validating cheque information using OCR and image processing methodologies. The study explored image preprocessing, text recognition, pattern matching, and automated verification workflows to improve accuracy and reduce manual effort in banking operations. The work demonstrated the potential of AI-driven automation in financial document processing.",
     
      technologies: [
        "OCR",
        "Image Processing",
        "Computer Vision",
        "Python",
        "Machine Learning",
        "OpenCV",
      ],

      highlights: [
        "Published at ICNTE 2023",
        "Implemented OCR-based text extraction",
        "Applied image preprocessing techniques",
        "Automated cheque verification workflow",
        "Improved document validation efficiency",
        "Explored real-world banking automation use cases",
      ],

      impact: [
        "Reduced manual verification workload",
        "Enhanced processing accuracy",
        "Demonstrated practical financial automation",
      ],
      
    },
  ];

  return (
    <section id="research" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
        >
          Research Publications
        </motion.h2>

        {publications.map((paper, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
          >

            <div className="p-10">

              {/* Header */}
              <div className="flex flex-wrap justify-between gap-4">

                <div>

                  <span className="text-blue-400 text-sm">
                    Research Publication
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-3">
                    {paper.title}
                  </h3>

                </div>

                <div className="flex gap-3 flex-wrap">

                  <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-xl text-sm border border-green-500/20">
                    {paper.status}
                  </span>

                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-xl text-sm border border-blue-500/20">
                    {paper.conference}
                  </span>

                </div>
                <div className="mt-10">

  <a
    href={paper.publicationLink}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:-translate-y-1 transition duration-300 shadow-lg shadow-blue-500/30"
  >
    📄 View Publication
  </a>

</div>

              </div>

              {/* Description */}
              <p className="text-gray-300 mt-8 leading-8 text-lg">
                {paper.longDescription}
              </p>

              {/* Technologies */}
              <div className="mt-10">

                <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                  Technologies & Concepts
                </h4>

                <div className="flex flex-wrap gap-3">

                  {paper.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/20 text-cyan-300 px-4 py-2 rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* Research Highlights */}
              <div className="mt-10">

                <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                  Research Highlights
                </h4>

                <div className="grid md:grid-cols-2 gap-4">

                  {paper.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-xl p-4"
                    >
                      📄 {item}
                    </div>
                  ))}

                </div>

              </div>

              {/* Impact */}
              <div className="mt-10">

                <h4 className="text-2xl font-semibold text-blue-400 mb-5">
                  Research Impact
                </h4>

                <div className="grid md:grid-cols-3 gap-4">

                  {paper.impact.map((item, i) => (
                    <div
                      key={i}
                      className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-5 text-center"
                    >
                      <p className="text-cyan-300 font-semibold">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}