import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const featuredSkills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML & CSS",
    "C / C++",
    "Git & GitHub",
  ];

  const skillCards = [
    { name: "React.js", desc: "Component Architecture, State & Hooks", tag: "Frontend" },
    { name: "Next.js", desc: "Modern Fullstack React & App Router", tag: "Framework" },
    { name: "JavaScript (ES6+)", desc: "DOM, Async/Await & Modern Web APIs", tag: "Language" },
    { name: "Tailwind CSS", desc: "Utility-first Responsive UI & Animations", tag: "Styling" },
    { name: "HTML & CSS", desc: "Semantic Markup, Flexbox & Grid Layouts", tag: "Fundamentals" },
    { name: "C & C++", desc: "Core Programming, OOP & Data Structures", tag: "Programming" },
    { name: "Git & GitHub", desc: "Version Control, Branching & Team Workflows", tag: "Tools" },
  ];

  // Infinite ticker items duplicated
  const marqueeItems = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "C++",
    "Git",
    "REST APIs",
    "Responsive Design",
  ];

  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [isAnimatingText, setIsAnimatingText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Cycling central skill text (like in Screenshot 1)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimatingText(true);
      setTimeout(() => {
        setActiveSkillIndex((prev) => (prev + 1) % featuredSkills.length);
        setIsAnimatingText(false);
      }, 400);
    }, 2400);

    return () => clearInterval(interval);
  }, [featuredSkills.length]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="overflow-hidden bg-[#f8f3ed] px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#fffaf5] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#b87572] shadow-sm">
            <span>SKILLS</span>
          </div>

          <h2 className="mb-3 text-4xl font-semibold text-[#4b3621]">
            Technical Expertise
          </h2>
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#b87572]"></div>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-6 text-[#5f5147]">
            Technologies and frameworks I use to craft performant, responsive web interfaces.
          </p>
        </div>

        {/* 1. HERO SPOTLIGHT CARD (Featured cycling skill - Reference Screenshot 1) */}
        <div className="relative mb-12 flex min-h-[170px] flex-col items-center justify-center rounded-3xl border border-[#eedfd0] bg-[#fffaf5] p-8 text-center shadow-md">
          <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#8b5e52]">
            Core Competency
          </span>

          <h3
            className={`text-4xl font-extrabold text-[#1f1a17] transition-all duration-500 md:text-6xl ${
              isAnimatingText
                ? "scale-95 blur-sm opacity-0"
                : "scale-100 blur-0 opacity-100"
            }`}>
            <span className="text-[#b87572]">{featuredSkills[activeSkillIndex]}</span>
          </h3>

          <div className="mt-4 flex items-center gap-2">
            {featuredSkills.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeSkillIndex ? "w-6 bg-[#b87572]" : "w-1.5 bg-[#eedfd0]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 2. DETAILED SKILL CARDS (Staggered Scroll Reveal) */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
              className={`group rounded-2xl border border-[#eedfd0]/80 bg-[#fffaf5] p-5 text-left transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-[#b87572]/50 hover:shadow-lg ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}>
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-[#f4e9df] px-2.5 py-0.5 text-[11px] font-semibold text-[#8b5e52]">
                  {skill.tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#b87572]/40 transition-colors group-hover:bg-[#b87572]" />
              </div>
              <h4 className="text-lg font-bold text-[#1f1a17] transition-colors group-hover:text-[#b87572]">
                {skill.name}
              </h4>
              <p className="mt-1 text-xs leading-5 text-[#5f5147]">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
