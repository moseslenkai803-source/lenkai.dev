import heroVisual from "../assets/hero-visual.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#07111f] px-6 pt-24 text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(7, 17, 31, 0.98) 0%, rgba(7, 17, 31, 0.88) 42%, rgba(7, 17, 31, 0.55) 100%), url(${heroVisual})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

            <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Software Engineer & Founder
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            I build
            <br />

            <span className="text-gray-400">
              digital products
            </span>

            <br />

            that
            <span className="text-blue-500"> matter.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I'm Moses Lenkai, a software engineer and founder focused on
            building thoughtful digital experiences, solving real-world
            problems, and turning ambitious ideas into working products.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
            >
              Let's Talk
            </a>

          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Based in Kenya
          </p>

          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            React · Python · FastAPI
          </p>

          <a
            href="#about"
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-400 transition-colors hover:text-white"
          >
            Explore
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}