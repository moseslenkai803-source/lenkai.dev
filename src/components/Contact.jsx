 function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500"></span>

          <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Contact
          </span>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl">

          <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Have an idea?
            <br />

            <span className="text-gray-400">
              Let's build it.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Whether you want to collaborate on a project, discuss an idea,
            or simply connect, I'd be happy to hear from you.
          </p>

          {/* Email CTA */}
          <div className="mt-10">
            <a
              href="mailto:your-email@example.com"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              Get in touch

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

        </div>

        {/* Contact Links */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black p-8 transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <span className="mb-8 block text-xs uppercase tracking-[0.2em] text-gray-600">
              01
            </span>

            <h3 className="text-xl font-medium">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
              Explore my code →
            </p>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black p-8 transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <span className="mb-8 block text-xs uppercase tracking-[0.2em] text-gray-600">
              02
            </span>

            <h3 className="text-xl font-medium">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
              Connect with me →
            </p>
          </a>

          <a
            href="mailto:your-email@example.com"
            className="group bg-black p-8 transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <span className="mb-8 block text-xs uppercase tracking-[0.2em] text-gray-600">
              03
            </span>

            <h3 className="text-xl font-medium">
              Email
            </h3>

            <p className="mt-2 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
              Send me a message →
            </p>
          </a>

        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Moses Lenkai
          </p>

          <p className="uppercase tracking-[0.15em]">
            Designed & Built with React
          </p>

        </div>

      </div>
    </section>
  );
}
export default Contact;