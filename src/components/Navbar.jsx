  import { useState } from "react";
    function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<nav className="relative flex items-center justify-between bg-[#fffaf5] px-8 py-5">
      <h2 className="text-2xl font-semibold text-[#1f1a17] transition duration-300 hover:-translate-y-1 hover:shadow-md">
        Muskan <span className="text-[#b87572]">Gupta</span>
      </h2>

<div className="hidden gap-8 md:flex">
  <a
    href="#home"
    className="text-sm text-[#4b3621] hover:text-[#b87572] transition duration-300 hover:-translate-y-1 hover:shadow-md">
    Home
  </a>

  <a
    href="#about"
    className="text-sm text-[#4b3621] hover:text-[#b87572] transition duration-300 hover:-translate-y-1 hover:shadow-md">
    About
  </a>

  <a
    href="#skills"
    className="text-sm text-[#4b3621] hover:text-[#b87572] transition duration-300 hover:-translate-y-1 hover:shadow-md">
    Skills
  </a>

  <a
    href="#projects"
    className="text-sm text-[#4b3621] hover:text-[#b87572] transition duration-300 hover:-translate-y-1 hover:shadow-md">
    Projects
  </a>

  <a
    href="#contact"
    className="text-sm text-[#4b3621] hover:text-[#b87572] transition duration-300 hover:-translate-y-1 hover:shadow-md">
    Contact
  </a>
</div>


<button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="text-2xl text-[#4b3621] md:hidden ">
  ⋮
</button>
{isMenuOpen && (
  <div className="absolute right-6 top-20 z-10 flex flex-col gap-4 rounded-xl bg-[#fffaf5] p-5 shadow-lg md:hidden ">
    <a href="#home" onClick={() => setIsMenuOpen(false)}>
      Home
    </a>

<a href="#about" onClick={() => setIsMenuOpen(false)}>
      About
   </a>
  <a href="#skills" onClick={() => setIsMenuOpen(false)}>
      Skills
     </a>

   <a href="#projects" onClick={() => setIsMenuOpen(false)}>
      Projects
    </a>

 <a href="#contact" onClick={() => setIsMenuOpen(false)}>
      Contact
    </a>
  </div>
)}

    </nav>
  )
}

export default Navbar