export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500"></span>
          <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
            About Me
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Left Side */}
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              I build digital products from
              <span className="text-blue-500"> ideas to reality.</span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="max-w-xl space-y-6 text-base leading-8 text-gray-400 md:text-lg">
            <p>
              I'm Moses Lenkai, a software engineer and founder passionate
              about building useful, thoughtful, and scalable digital
              experiences.
            </p>

            <p>
              I enjoy working across the stack — from designing interfaces
              and building React applications to developing backend systems
              and thinking about the architecture behind a product.
            </p>

            <p>
              I'm particularly interested in turning complex problems into
              simple experiences that people can actually use.
            </p>
          </div>
        </div>

        {/* Skills / Focus */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">

          <div className="bg-black p-8">
            <span className="mb-4 block text-sm text-blue-500">
              01
            </span>

            <h3 className="mb-3 text-xl font-medium">
              Product
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              Turning ideas and real-world problems into useful digital
              products.
            </p>
          </div>

          <div className="bg-black p-8">
            <span className="mb-4 block text-sm text-blue-500">
              02
            </span>

            <h3 className="mb-3 text-xl font-medium">
              Engineering
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              Building responsive interfaces, APIs, and scalable application
              architecture.
            </p>
          </div>

          <div className="bg-black p-8">
            <span className="mb-4 block text-sm text-blue-500">
              03
            </span>

            <h3 className="mb-3 text-xl font-medium">
              Innovation
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              Exploring ambitious ideas and finding technology-driven ways
              to solve difficult problems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}