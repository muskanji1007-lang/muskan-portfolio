export default function TechTicker() {
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

  return (
    <div className="relative overflow-hidden border-y border-[#eedfd0]/80 bg-[#fffaf5] py-5">
      {/* Edge Blur Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#fffaf5] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fffaf5] to-transparent" />

      <div className="animate-marquee items-center gap-4">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#f4e9df]/70 px-5 py-2 text-sm font-semibold text-[#4b3621] shadow-xs transition hover:border-[#b87572] hover:bg-[#fffaf5]">
            <span className="h-2 w-2 rounded-full bg-[#b87572]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
