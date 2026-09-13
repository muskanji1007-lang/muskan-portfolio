function Skills() {
  const skills = ["HTML", "CSS", "C", "C++", "JavaScript", "React.js", "Tailwind CSS"]

  return (
    <section id="skills" className="bg-[#f8f3ed] px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-semibold text-[#4b3621]">
        My Skills
      </h2>

      <div 
       className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
     <div className="rounded-2xl bg-[#fffaf5] p-6 text-center  transition duration-300 hover:-translate-y-1 hover:shadow-md">
   <h3 className="text-xl font-semibold text-[#8b5e52]">
       {skill}
      </h3>
      </div>
 ))}
      </div>
    </section>
  )
}

export default Skills