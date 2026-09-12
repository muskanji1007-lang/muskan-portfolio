function About() {
  return (
    <section
  id="about"
  className="min-h-screen bg-[#fffaf5] px-6 py-20 ">
      <h2 className=" text-center text-4xl font-semibold text-[#4b3621] mb-6">
  About Me
      </h2>
<p className="mx-auto max-w-2xl text-center text-lg leading-8 text-[#5f5147] ">
  I am a Computer Science and Engineering student specializing in Data Science.
  I am interested in frontend development and enjoy creating simple,
  user-friendly websites.
</p>
     <p className="mx-auto max-w-2xl text-center text-lg leading-8 text-[#5f5147]">
  I am currently learning JavaScript and React to improve my web development
  skills and build better projects.
  </p>

  
  <h3 className=" text-center text-2xl font-semibold text-[#4b3621] mt-10 mb-3">
  Education
</h3>

<p className=" text-center text-lg text-[#5f5147]">
  Bachelor of Technology in Computer Science and Engineering (Data Science)
</p>
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-2xl bg-[#f4e9df] p-5">
    <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
      Education
    </h3>
    <p className="text-sm text-[#5f5147]">
      B.Tech CSE (Data Science)
    </p>
  </div>

  <div className="rounded-2xl bg-[#f4e9df] p-5">
    <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
      Learning
    </h3>
    <p className="text-sm text-[#5f5147]">
      React & JavaScript
    </p>
  </div>

  <div className="rounded-2xl bg-[#f4e9df] p-5">
    <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
      Focus
    </h3>
    <p className="text-sm text-[#5f5147]">
      Frontend Development
    </p>
  </div>

  <div className="rounded-2xl bg-[#f4e9df] p-5">
    <h3 className="mb-2 text-lg font-semibold text-[#4b3621]">
      Interests
    </h3>
    <p className="text-sm text-[#5f5147]">
      Web Design & New Technologies
    </p>
  </div>

</div>

    </section>
  )
}

export default About