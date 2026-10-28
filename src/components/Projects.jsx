import nimbusImage from '../assets/nimbus.jpeg'
import skillflowImage from '../assets/skillflow.jpeg'
import weatherImage from '../assets/weather.jpeg'
import opportunityHubImage from '../assets/opportunityHub.jpeg'

function Projects() {
  const projects = [
    {
      name: "Opportunity Hub",
      description: "A student-focused platform to discover hackathons, internships, workshops, and other career opportunities.",
      tags: ["React", "JavaScript", "Tailwind CSS", "REST API"],
      github: "https://github.com/muskanji1007-lang/Event-Management-App",
      live: "https://event-management-frontend-three-kappa.vercel.app/",
      image: opportunityHubImage,
    },
    {
      name: "Nimbus 3.0",
      description: "A responsive workshop landing page with modern layout and clean aesthetic styling.",
      tags: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/muskanji1007-lang/task-1",
      live: "https://task-1-snowy-one.vercel.app/",
      image: nimbusImage,
    },
    {
      name: "SkillFlow",
      description: "A structured learning platform featuring interactive course slides and task management.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/muskanji1007-lang/skillflow-frontend",
      live: "https://skillflow-frontend-one.vercel.app/",
      image: skillflowImage,
    },
    {
      name: "Weather Website",
      description: "A live meteorological application displaying real-time weather metrics via API integration.",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      github: "https://github.com/muskanji1007-lang/weather-website",
      live: "https://weather-website-one-theta.vercel.app/",
      image: weatherImage,
    },
  ]

  return (
    <section id="projects" className="bg-[#fffaf5] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#f8f3ed] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#b87572]">
            <span>Featured Works</span>
          </div>
          <h2 className="mb-3 text-4xl font-semibold text-[#4b3621]">
            My Projects
          </h2>
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#b87572]"></div>
          <p className="mx-auto mb-12 max-w-2xl text-sm leading-6 text-[#5f5147]">
            Here are some of the projects I've built. Each project helped me learn and grow in my development journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col justify-between rounded-3xl border border-[#eedfd0]/80 bg-[#f4e9df] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#b87572]/40 hover:shadow-xl">
              <div>
                <div className="relative mb-5 h-52 w-full overflow-hidden rounded-2xl bg-[#e6d6c7] shadow-inner">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-[#4b3621] transition-colors group-hover:text-[#b87572]">
                  {project.name}
                </h3>

                <p className="mb-4 text-sm leading-6 text-[#5f5147]">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#d8b8ad]/60 bg-[#fffaf5] px-3 py-0.5 text-xs font-medium text-[#8b5e52]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#2b2521] px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-[#4b3621] hover:shadow-md active:scale-95">
                  <span>Live Demo</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#4b3621] bg-[#fffaf5] px-5 py-2 text-xs font-semibold text-[#4b3621] transition-all hover:bg-[#4b3621] hover:text-white hover:shadow-md active:scale-95">
                  <span>GitHub</span>
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
