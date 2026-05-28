const projects = [
  {
    title: "Big Data Analytics Project",
    tech: "Spark + Zeppelin + ML",
    desc: "Processed large-scale datasets using Apache Spark.",
  },
  {
    title: "Car Price Prediction",
    tech: "Python + Streamlit",
    desc: "ML-powered predictive analytics application.",
  },
  {
    title: "OCR Cheque Validation",
    tech: "Python + OCR",
    desc: "Extracted cheque data using image processing.",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-blue-400 mt-2">{project.tech}</p>
            <p className="mt-4 text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
