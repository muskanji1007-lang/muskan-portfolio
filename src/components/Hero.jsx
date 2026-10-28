import profileImage from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f8f3ed] px-6 pt-28 pb-20 text-left md:pt-36 md:pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">

        <div className="w-full md:w-1/2">
          {/* CCC AKGEC Badge - Clickable to open https://www.cccakgec.com */}
          <a
            href="https://www.cccakgec.com"
            target="_blank"
            rel="noreferrer"
            title="Visit Cloud Computing Cell official website"
            className="group mb-4 inline-flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#fffaf5] px-4 py-1.5 text-xs font-semibold text-[#8b5e52] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b87572] hover:bg-[#b87572] hover:text-white hover:shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-[#b87572] group-hover:bg-white" />
            <span>Member @ Cloud Computing Cell (CCC), AKGEC</span>
            <span className="opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100">↗</span>
          </a>

          <p className="mb-1 text-lg font-medium text-[#8b5e52]">
            Hi, I'm
          </p>
          <h1 className="mb-4 text-5xl font-semibold text-[#1f1a17] md:text-6xl">
            Muskan <span className="text-[#b87572]">Gupta</span>
          </h1>

          <h2 className="mb-4 text-2xl font-medium text-[#8b5e52]">
            Frontend Developer <span className="text-base text-[#b87572]">| Next.js & React</span>
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-8 text-[#5f5147]">
            I'm a Computer Science and Engineering student (Data Science) at AKGEC,
            passionate about building engaging, user-friendly web applications and learning new technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-block rounded-full bg-[#2b2521] px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#4b3621] hover:shadow-md active:scale-95">
              View My Projects →
            </a>
            <a
              href="#contact"
              className="inline-block rounded-full border border-[#4b3621] px-7 py-3 text-sm font-medium text-[#4b3621] transition-all duration-300 hover:bg-[#4b3621] hover:text-white hover:shadow-md active:scale-95">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex w-full items-center justify-center md:mt-4 md:w-1/2 md:justify-end">
          {/* Subtle hanging cord & swinging frame */}
          <div className="swinging-photo-wrapper relative flex flex-col items-center">
            {/* Hanging Pin & Cord */}
            <div className="flex flex-col items-center">
              <div className="h-3.5 w-3.5 rounded-full bg-[#8b5e52] shadow-sm ring-2 ring-[#e8ded3]" />
              <div className="h-6 w-[2px] bg-gradient-to-b from-[#8b5e52] to-[#b87572]" />
            </div>

            {/* Photo with soft warm frame & shadow */}
            <div className="relative rounded-[32px] bg-[#fffaf5] p-2 shadow-xl shadow-[#4b3621]/10 transition-shadow duration-300 hover:shadow-2xl">
              <img
                src={profileImage}
                alt="Muskan Gupta"
                className="h-[420px] w-[350px] shrink-0 rounded-[26px] object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
