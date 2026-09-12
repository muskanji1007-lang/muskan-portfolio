function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f4e9df] px-6 py-20" >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm uppercase tracking-widest text-[#b87572]">
          Contact
        </p>

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
  and connecting with people who share an interest in technology.
  If you would like to know more about my work or projects,
  feel free to reach out.
</p>
<p className="mt-6 font-serif italic text-[#b87572]">
  Let's create something meaningful together ♡
    </p>
    <div className="mt-6 space-y-3 text-[#5f5147]">
  <p>
    <span className="font-semibold text-[#4b3621]">Email:</span>{" "}
    muskanji1007@gmail.com
  </p>

  <p>
    <span className="font-semibold text-[#4b3621]">Instagram:</span>{" "}
    <a
      href="https://www.instagram.com/muskanji1007?stkn=d3FhdXpvdWpxNmk2"
      target="_blank"
      rel="noreferrer"
      className="text-[#b87572] hover:underline">
      @muskanji1007
    </a>
  </p>
  <p>
  <span className="font-semibold text-[#4b3621]">GitHub:</span>{" "}
  <a
    href="https://github.com/muskanji1007-lang"
    target="_blank"
    rel="noreferrer"
    className="text-[#b87572] hover:underline">
    github.com/muskanji1007-lang
  </a>
</p>
</div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Contact