const projects = [
  {
    title: "Nestify",
    category: "Featured Project",
    description:
      "A property platform exploring digital addressing, verified property identities, and smarter ways to connect people with spaces.",
    technologies: ["React", "Python", "FastAPI", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Event Explorer",
    category: "Web Application",
    description:
      "A React application for discovering events with category filtering, search, reusable components, and responsive UI.",
    technologies: ["React", "JavaScript", "CSS"],
    featured: false,
  },
  {
    title: "Cold Chain Tracker",
    category: "Logistics",
    description:
      "A digital interface designed to monitor refrigerated transport and visualize important logistics information.",
    technologies: ["React", "UI/UX", "Dashboard"],
    featured: false,
  },
  {
    title: "Color Clock",
    category: "Creative Project",
    description:
      "An interactive clock that transforms time into a dynamic visual experience using color.",
    technologies: ["JavaScript", "Vite", "date-fns"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500"></span>

              <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Selected Work
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Things I've
              <span className="text-blue-500"> built.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-gray-400 md:justify-self-end">
            A selection of projects where I've explored ideas, learned new
            technologies, and turned concepts into working experiences.
          </p>
        </div>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <div
              key={project.title}
              className="group relative mb-px overflow-hidden rounded-t-2xl border border-white/10 bg-white/[0.02]"
            >
              {/* Visual Area */}
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-950/40 via-black to-black md:min-h-[480px]">

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Center Visual */}
                <div className="relative z-10 text-center">
                  <div className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                    Nestify
                  </div>

                  <div className="text-6xl font-semibold tracking-tighter text-white md:text-8xl">
                    N.
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Property · Addressing · Location
                  </p>
                </div>

              </div>

              {/* Project Information */}
              <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:p-12">

                <div>
                  <div className="mb-4 text-xs uppercase tracking-[0.2em] text-blue-500">
                    {project.category}
                  </div>

                  <h3 className="mb-4 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="max-w-2xl text-base leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-end">
                  <p className="rounded-full border border-white/15 px-5 py-3 text-sm text-gray-400">
                    Case study coming soon
                  </p>
                </div>

              </div>
            </div>
          ))}

        {/* Other Projects */}
        <div className="grid gap-px overflow-hidden rounded-b-2xl border-x border-b border-white/10 bg-white/10 md:grid-cols-3">

          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <article
                key={project.title}
                className="group flex min-h-[360px] flex-col bg-black p-8 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                {/* Project Number */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm text-blue-500">
                    0{projects.indexOf(project) + 1}
                  </span>

                  <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs text-gray-500"
                        >
                          #{technology.replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}

        </div>

      </div>
    </section>
  );
}
