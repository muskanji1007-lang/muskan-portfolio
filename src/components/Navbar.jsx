import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[94%] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-[#eedfd0]/90 bg-[#fffaf5]/85 px-6 py-2.5 shadow-lg shadow-[#4b3621]/5 backdrop-blur-md transition-all">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#1f1a17]">
          <span className="flex h-2.5 w-2.5 rounded-full bg-[#b87572]" />
          <span>Muskan <span className="text-[#b87572]">Gupta</span></span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-1 rounded-full bg-[#f8f3ed]/80 p-1 border border-[#eedfd0]/50 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#4b3621] transition-all hover:bg-[#fffaf5] hover:text-[#b87572] hover:shadow-xs">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full bg-[#2b2521] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#4b3621] hover:shadow-md active:scale-95">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span>Let's Talk ↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4e9df] text-lg text-[#4b3621] transition hover:bg-[#eedfd0] md:hidden">
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-[#eedfd0] bg-[#fffaf5]/95 p-4 shadow-xl backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-[#4b3621] transition hover:bg-[#f4e9df] hover:text-[#b87572]">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 rounded-xl bg-[#2b2521] px-4 py-2.5 text-center text-xs font-semibold text-white">
            Let's Talk ↗
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
