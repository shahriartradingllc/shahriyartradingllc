type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Project One",
    description: "A modern web app demonstrating clean UI and solid architecture.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "API‑driven application with authentication and dashboards.",
    tech: ["Node.js", "MongoDB", "JWT"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Responsive landing page optimized for performance and SEO.",
    tech: ["React", "Vercel", "SEO"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container py-16">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="card p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-300 flex-1">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-1 rounded-lg border border-slate-700 text-sm">{t}</span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="btn mt-6">View</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
