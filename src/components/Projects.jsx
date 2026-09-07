import nestifyImage from "../assets/projects/Nestify1.jpg";
import eventExplorerImage from "../assets/projects/EventExplorer1.jpg";
import coldChainTrackerImage from "../assets/projects/ColdChainTracker1.webp";
import careLinkImage from "../assets/projects/CareLink1.jpg";

const projects = [
  {
    title: "Nestify",
    category: "Featured Project",
    image: nestifyImage,
    imageAlt: "Nestify property platform interface with a location map and property details",
    visualLabel: "Property identity",
    visualDetail: "Verified locations · Map intelligence",
    description:
      "A property platform exploring digital addressing, verified property identities, and smarter ways to connect people with spaces.",
    technologies: ["React", "Python", "FastAPI", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Event Explorer",
    category: "Web Application",
    image: eventExplorerImage,
    imageAlt: "Event Explorer interface with a map and event listings",
    visualLabel: "Discover nearby",
    visualDetail: "Search · Filters · Event details",
    description:
      "A React application for discovering events with category filtering, search, reusable components, and responsive UI.",
    technologies: ["React", "JavaScript", "CSS"],
    featured: false,
  },
  {
    title: "Cold Chain Tracker",
    category: "Logistics",
    image: coldChainTrackerImage,
    imageAlt: "Cold Chain Tracker dashboard with shipment temperature data",
    visualLabel: "Live shipment health",
    visualDetail: "Temperature · Routes · Alerts",
    description:
      "A digital interface designed to monitor refrigerated transport and visualize important logistics information.",
    technologies: ["React", "UI/UX", "Dashboard"],
    featured: false,
  },
  {
    title: "CareLink",
    category: "Product Concept",
    image: careLinkImage,
    imageAlt: "CareLink healthcare appointment platform preview",
    visualLabel: "Appointments, simplified",
    visualDetail: "Care discovery · Scheduling · Patient access",
    description:
      "A patient-first healthcare platform concept for discovering providers, booking appointments, and keeping care within reach.",
    technologies: ["React", "UX Design", "API Design"],
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

        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <div
              key={project.title}
              className="group relative mb-px overflow-hidden rounded-t-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="relative overflow-hidden border-b border-white/10 bg-[#101827] p-3 sm:p-5 md:p-8">
                <div className="overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl shadow-blue-950/20">
                  <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-white/90 px-3">
                    <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
                    <span className="h-2 w-2 rounded-full bg-[#ffc857]" />
                    <span className="h-2 w-2 rounded-full bg-[#63d297]" />
                    <span className="ml-3 h-3 w-1/3 rounded-full bg-black/10" />
                  </div>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="block aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex aspect-[16/9] w-full items-center justify-center bg-[#14263c] px-6 text-center">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                          {project.visualLabel}
                        </p>
                        <p className="mt-3 text-sm text-blue-100/60">
                          Project image coming soon
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-12 sm:left-12 sm:right-12">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                        {project.visualLabel}
                      </p>
                      <p className="mt-2 text-xs text-gray-600">
                        {project.visualDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

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

                <div className="flex items-end">
                  <p className="border-l border-blue-500 pl-4 text-sm text-gray-400">
                    Case study coming soon
                  </p>
                </div>

              </div>
            </div>
          ))}

        <div className="grid gap-px overflow-hidden rounded-b-2xl border-x border-b border-white/10 bg-white/10 md:grid-cols-3">

          {projects
            .filter((project) => !project.featured)
            .map((project, projectIndex) => (
              <article
                key={project.title}
                className="group flex min-h-[420px] flex-col bg-black transition-colors duration-300 hover:bg-[#080d16]"
              >
                <div className="flex items-center justify-between px-8 pb-6 pt-8">
                  <span className="text-sm text-blue-500">
                    0{projectIndex + 1}
                  </span>

                  <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    {project.category}
                  </span>
                </div>

                <div className="mx-5 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="block aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-[#14263c] px-5 text-center">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-blue-300">
                          {project.visualLabel}
                        </p>
                        <p className="mt-3 text-xs text-blue-100/60">
                          Project image coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-8 pb-8 pt-7">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-blue-500">
                    {project.visualLabel}
                  </p>
                  <h3 className="mb-3 text-2xl font-medium text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-7">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="text-xs text-gray-500">
                        #{technology.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

        </div>

      </div>
    </section>
  );
}
