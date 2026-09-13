import nimbusImage from '../assets/nimbus.jpeg'
import skillflowImage from '../assets/skillflow.jpeg'
import weatherImage from '../assets/weather.jpeg'
function Projects() {
  const projects = [
    {
      name: "Nimbus 3.0",
      description: "A responsive workshop landing page.",
      technologies: "HTML, CSS, ",

  github: "https://github.com/muskanji1007-lang/task-1",
  live: "https://task-1-snowy-one.vercel.app/",
  image: nimbusImage,
    },
    {
  name: "SkillFlow",
  description: "A learning website with course slides and a to-do list.",
  technologies: "HTML, CSS, JavaScript",

  github: "https://github.com/muskanji1007-lang/skillflow-frontend",
  live: "https://skillflow-frontend-one.vercel.app/",
  image: skillflowImage,
},
{
  name: "Weather Website",
  description: "A website that displays current weather information.",
  technologies: "HTML, CSS, JavaScript, API",

  github: "https://github.com/muskanji1007-lang/weather-website",
  live: "https://weather-website-one-theta.vercel.app/",
  image: weatherImage,
},
  ]

  return (
    <section id="projects" className="bg-[#fffaf5] px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-semibold text-[#4b3621]">
        My Projects
      </h2>
      <h3 className="mb-4 text-center font-bold text-[#4b3621]">
        Here are some of the projects I've worked on, Each project helped me learn and grow in my development journey.</h3>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 ">
        {projects.map((project) => (
          <div className="rounded-2xl bg-[#f4e9df] p-6 shadow-sm">
       <img
  src={project.image}
  alt={project.name}
  className="mb-5 h-44 w-full rounded-xl object-cover"/>
        <h3 className="mb-3 text-2xl font-bold text-[#4b3621]">
              {project.name}
            </h3>

            <p className="mb-4 text-[#5f5147]">
          {project.description}
            </p>

        <p className="text-sm text-[#8b5e52]">
              {project.technologies}
            </p>
            <div className="mt-5 flex gap-3">
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="rounded-full bg-[#2b2521] px-4 py-2 text-sm text-white hover:bg-[#4b3621]">
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-[#4b3621] px-5 py-2 text-sm text-[#4b3621] hover:bg-[#4b3621] hover:text-white">
    GitHub
  </a>
</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects