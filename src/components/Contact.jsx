import { useState } from "react";

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState("")

  // Muskan Gupta's verified LinkedIn public profile URL
  const linkedInUrl = "https://www.linkedin.com/in/muskan-gupta-305525383"

  function handleSubmit(e) {
    e.preventDefault()

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setStatus("Please fill all fields.")
      setStatusType("error")
      return
    }
    if (!email.includes("@")) {
      setStatus("Please enter a valid email.")
      setStatusType("error")
      return
    }

    setStatus("Form submitted successfully! Thank you for reaching out.")
    setStatusType("success")

    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="bg-[#f4e9df] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#fffaf5] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#b87572]">
          <span>Contact</span>
        </div>

        <h2 className="mb-4 text-4xl font-semibold text-[#4b3621]">
          Let's work together
        </h2>

        <div className="mb-10 h-px w-16 bg-[#b87572]"></div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-[#4b3621]">
              Get in touch
            </h3>

            <p className="leading-7 text-[#5f5147]">
              I am always open to learning new things, exploring creative ideas,
              collaborating on interesting web projects, and connecting with people who share an interest in technology.
              If you would like to know more about my work or chat about opportunities, feel free to reach out.
            </p>
            <p className="mt-6 font-serif italic text-[#b87572]">
              Let's create something meaningful together ♡
            </p>

            {/* Clickable Social Cards */}
            <div className="mt-8 space-y-3 text-[#5f5147]">
              {/* Email */}
              <a
                href="mailto:muskanji1007@gmail.com"
                className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-[#eedfd0] hover:bg-[#fffaf5] hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#eedfd0]/80 bg-[#fffaf5] text-[#b87572] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#b87572] group-hover:bg-[#b87572] group-hover:text-white">
                  <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#8b5e52]">Email</span>
                  <span className="font-medium text-[#1f1a17] transition-colors group-hover:text-[#b87572]">
                    muskanji1007@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-[#eedfd0] hover:bg-[#fffaf5] hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#eedfd0]/80 bg-[#fffaf5] text-[#b87572] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#b87572] group-hover:bg-[#b87572] group-hover:text-white">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.98 0 1.76.78 1.76 1.75s-.78 1.76-1.76 1.76m1.39 9.97v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#8b5e52]">LinkedIn</span>
                  <span className="font-medium text-[#1f1a17] transition-colors group-hover:text-[#b87572]">
                    Connect on LinkedIn ↗
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/muskanji1007-lang"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-[#eedfd0] hover:bg-[#fffaf5] hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#eedfd0]/80 bg-[#fffaf5] text-[#b87572] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#b87572] group-hover:bg-[#b87572] group-hover:text-white">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#8b5e52]">GitHub</span>
                  <span className="font-medium text-[#1f1a17] transition-colors group-hover:text-[#b87572]">
                    github.com/muskanji1007-lang
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_.muskan_.gupta_"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-[#eedfd0] hover:bg-[#fffaf5] hover:shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#eedfd0]/80 bg-[#fffaf5] text-[#b87572] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#b87572] group-hover:bg-[#b87572] group-hover:text-white">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#8b5e52]">Instagram</span>
                  <span className="font-medium text-[#1f1a17] transition-colors group-hover:text-[#b87572]">
                    @_.muskan_.gupta_
                  </span>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#eedfd0]/70 bg-[#fffaf5] p-6 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-5 text-2xl font-semibold text-[#4b3621]">
              Send a message
            </h3>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-[#4b3621]">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-[#d8b8ad] bg-white px-4 py-3 outline-none transition focus:border-[#b87572] focus:ring-2 focus:ring-[#b87572]/20" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-[#4b3621]">
                Email
              </label>

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[#d8b8ad] bg-white px-4 py-3 outline-none transition focus:border-[#b87572] focus:ring-2 focus:ring-[#b87572]/20" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-[#4b3621]">
                Message
              </label>

              <textarea
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-[#d8b8ad] bg-white px-4 py-3 outline-none transition focus:border-[#b87572] focus:ring-2 focus:ring-[#b87572]/20" />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#b87572] px-4 py-3 font-semibold text-white transition-all hover:bg-[#9f625f] hover:shadow-md active:scale-98">
              Send Message
            </button>

            {status && (
              <p
                className={`mt-4 rounded-xl p-3 text-center text-sm font-medium ${
                  statusType === "error"
                    ? "border border-red-200 bg-red-50 text-red-600"
                    : "border border-green-200 bg-green-50 text-green-700"
                }`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
