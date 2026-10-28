import aboutImage from "../assets/about-workspace.png"

function About() {
  return (
    <section id="about" className="bg-[#fffaf5] px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1.1fr_0.8fr]">

        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#f8f3ed] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#b87572]">
            <span>About Me</span>
          </div>

          <h2 className="mb-4 text-4xl font-semibold text-[#4b3621]">
            A little about me
          </h2>

          <div className="mb-6 h-px w-16 bg-[#b87572]"></div>

          <p className="mb-4 leading-7 text-[#5f5147]">
            I am <strong className="font-semibold text-[#1f1a17]">Muskan Gupta</strong>, a Computer Science and Engineering student
            specializing in Data Science at Ajay Kumar Garg Engineering College (AKGEC).
          </p>

          <p className="mb-4 leading-7 text-[#5f5147]">
            I am currently contributing as a Frontend Developer at{" "}
            <a
              href="https://www.cccakgec.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#8b5e52] underline decoration-[#b87572]/40 underline-offset-4 transition hover:text-[#b87572] hover:decoration-[#b87572]">
              Cloud Computing Cell (CCC) ↗
            </a>
            , AKGEC, where I work on dynamic web interfaces and learn modern development practices alongside passionate peers.
          </p>

          <p className="leading-7 text-[#5f5147]">
            I love learning by building — continuously exploring <span className="font-medium text-[#b87572]">Next.js, React, JavaScript, and Tailwind CSS</span> to turn creative ideas into clean, accessible web experiences.
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm font-serif italic text-[#b87572]">
            <span>Always learning ♡</span>
            <span>•</span>
            <span className="not-italic text-xs font-sans text-[#8b5e52]">500+ Connections on LinkedIn</span>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Card 1: Society / Role - Clickable */}
          <a
            href="https://www.cccakgec.com"
            target="_blank"
            rel="noreferrer"
            title="Visit Cloud Computing Cell (CCC) website"
            className="group block rounded-2xl border border-[#eedfd0]/80 bg-[#f4e9df] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b87572] hover:bg-[#fffaf5] hover:shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xl">⚡</span>
              <span className="text-xs font-semibold text-[#b87572] opacity-0 transition-opacity group-hover:opacity-100">
                Visit cccakgec.com ↗
              </span>
            </div>
            <h3 className="mb-1 text-base font-bold text-[#4b3621] transition-colors group-hover:text-[#b87572]">
              Society Member
            </h3>
            <p className="text-sm font-semibold text-[#8b5e52]">
              Cloud Computing Cell (CCC)
            </p>
            <p className="mt-1 text-xs text-[#5f5147]">
              Frontend Developer • AKGEC
            </p>
          </a>

          {/* Card 2: Education */}
          <div className="rounded-2xl border border-[#eedfd0]/80 bg-[#f4e9df] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b87572]/40 hover:shadow-md">
            <span className="text-xl">🎓</span>
            <h3 className="mb-1 text-base font-bold text-[#4b3621]">
              Education
            </h3>
            <p className="text-sm font-semibold text-[#8b5e52]">
              B.Tech CSE (Data Science)
            </p>
            <p className="text-xs text-[#5f5147] mt-1">
              AKGEC, Ghaziabad (2025–2029)
            </p>
          </div>

          {/* Card 3: Tech Focus */}
          <div className="rounded-2xl border border-[#eedfd0]/80 bg-[#f4e9df] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b87572]/40 hover:shadow-md">
            <span className="text-xl">💻</span>
            <h3 className="mb-1 text-base font-bold text-[#4b3621]">
              Tech Focus
            </h3>
            <p className="text-sm font-semibold text-[#8b5e52]">
              React & Next.js
            </p>
            <p className="text-xs text-[#5f5147] mt-1">
              JavaScript, Tailwind, C/C++
            </p>
          </div>

          {/* Card 4: Location */}
          <div className="rounded-2xl border border-[#eedfd0]/80 bg-[#f4e9df] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b87572]/40 hover:shadow-md">
            <span className="text-xl">📍</span>
            <h3 className="mb-1 text-base font-bold text-[#4b3621]">
              Location
            </h3>
            <p className="text-sm font-semibold text-[#8b5e52]">
              Chandausi / Ghaziabad
            </p>
            <p className="text-xs text-[#5f5147] mt-1">
              Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Workspace image */}
        <div className="overflow-hidden rounded-3xl shadow-md border border-[#eedfd0]/80">
          <img
            src={aboutImage}
            alt="Laptop, coffee and notebook workspace"
            className="h-64 w-full rounded-3xl object-cover transition duration-500 hover:scale-105" />
        </div>

      </div>
    </section>
  )
}

export default About
