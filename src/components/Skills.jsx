const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Apache Spark",
  "Apache Zeppelin",
  "Machine Learning",
  "NLP",
  "Generative AI",
  "Prompt Engineering",
];

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-4 rounded-2xl text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
