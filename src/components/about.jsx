import aboutImage from "../assets/about-workspace.png"
function About() {
  return (
    <section
  id="about"
    className="min-h-screen bg-[#fffaf5] px-6 py-20"
>
   <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
  
  <div>
    <p className="mb-3 text-sm uppercase tracking-widest text-[#b87572]">
      About Me
    </p>

    <h2 className="mb-4 text-4xl font-semibold text-[#4b3621]">
      A little about me
    </h2>

    <div className="mb-6 h-px w-16 bg-[#b87572]"></div>

    <p className="mb-4 leading-7 text-[#5f5147]">
      I am Muskan Gupta, a Computer Science and Engineering student
      specializing in Data Science. I am interested in frontend development
      and enjoy creating simple, user-friendly websites.
    </p>

    <p className="leading-7 text-[#5f5147]">
      I am currently learning JavaScript and React to improve my web
      development skills and build better projects.
    </p>

    <p className="mt-6 font-serif italic text-[#b87572]">
      Always learning ♡
    </p>
  </div>

  
  <div className="grid gap-4 sm:grid-cols-2">

    <div className="rounded-2xl bg-[#f4e9df] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
        Education
      </h3>
      <p className="text-sm leading-6 text-[#5f5147]">
        B.Tech CSE
        <br />
        Data Science
        <br />
        AKGEC
      </p>
    </div>

    <div className="rounded-2xl bg-[#f4e9df] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
        Learning
      </h3>
      <p className="text-sm leading-6 text-[#5f5147]">
        React
        <br />
        JavaScript
        <br />
        Frontend Development
      </p>
    </div>

    <div className="rounded-2xl bg-[#f4e9df] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
        Location
      </h3>
      <p className="text-sm text-[#5f5147]">
        Chandausi.
      </p>
    </div>

    <div className="rounded-2xl bg-[#f4e9df] p-5 transition duration-500 hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
        Hobby
      </h3>
      <p className="text-sm leading-6 text-[#5f5147]">
        Coding
        <br />
        Music
        <br />
      Dancing
      </p>
    </div>

  </div>

  <div>
    <img
      src={aboutImage}
      alt="Laptop, coffee and notebook workspace"
      className="h-56 w-full rounded-3xl object-cover transition duration-300 hover:-translate-y-1 hover:shadow-md"
    />
  </div>

</div>

    </section>
  )
}

export default About