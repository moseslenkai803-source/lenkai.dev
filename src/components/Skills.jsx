export default function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description:
        "Building responsive, accessible, and interactive user interfaces.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      number: "02",
      title: "Backend",
      description:
        "Designing APIs and backend systems that support real-world applications.",
      skills: [
        "Python",
        "FastAPI",
        "REST APIs",
        "Database Design",
      ],
    },
    {
      number: "03",
      title: "Tools",
      description:
        "Using modern development tools to build, manage, and ship projects.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Linux",
      ],
    },
    {
      number: "04",
      title: "Product",
      description:
        "Thinking beyond code to understand problems, users, and product experiences.",
      skills: [
        "UI/UX",
        "Product Thinking",
        "Problem Solving",
        "System Design",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500"></span>

              <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Skills
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Tools I use to
              <span className="text-blue-500"> build.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-gray-400 md:justify-self-end">
            A growing toolkit shaped by building real projects, solving
            problems, and continuously learning new technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group bg-black p-8 transition-colors duration-300 hover:bg-white/[0.03] md:p-10"
            >
              {/* Number */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm text-blue-500">
                  {group.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-2xl font-medium">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mb-8 max-w-md text-sm leading-6 text-gray-500">
                {group.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-white/20 group-hover:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-tight text-gray-300 md:text-3xl">
            I don't just learn technologies.
            <span className="text-white">
              {" "}
              I learn how to use them to solve problems.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}