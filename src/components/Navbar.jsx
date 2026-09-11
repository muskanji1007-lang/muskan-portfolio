  function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#fffaf5] px-8 py-5">

      <h2 className="text-2xl font-semibold text-[#1f1a17]">
        Muskan <span className="text-[#b87572]">Gupta</span>
      </h2>

      <div className="flex gap-8">
        <a href="#home" className="text-sm text-[#4b3621] hover:text-[#b87572]">
          Home
        </a>

        <a href="#about" className="text-sm text-[#4b3621] hover:text-[#b87572]">
          About
        </a>

        <a href="#skills" className="text-sm text-[#4b3621] hover:text-[#b87572]">
          Skills
        </a>

        <a href="#projects" className="text-sm text-[#4b3621] hover:text-[#b87572]">
          Projects
        </a>

        <a href="#contact" className="text-sm text-[#4b3621] hover:text-[#b87572]">
          Contact
        </a>
      </div>

    </nav>
  )
}

export default Navbar