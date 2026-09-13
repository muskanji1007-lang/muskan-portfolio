import { useState } from "react";
function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState("")
  function handleSubmit(e) {
  e.preventDefault()

  if (name === "" || email === "" || message === "") {
    setStatus("Please fill all fields.")
    setStatusType("error")
    return
  }
  if (!email.includes("@")) {
  setStatus("Please enter a valid email.")
  setStatusType("error")
  return
}

  setStatus("Form submitted successfully!")
  setStatusType("success")

setName("")
setEmail("")
setMessage("")
  }
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
    <form
  onSubmit={handleSubmit}
  className="rounded-3xl bg-[#fffaf5] p-6 shadow-sm">
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
    className="w-full rounded-xl border border-[#d8b8ad] bg-white px-4 py-3 outline-none focus:border-[#b87572]"/>
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
    className="w-full rounded-xl border border-[#d8b8ad] bg-white px-4 py-3 outline-none focus:border-[#b87572]"/>
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
    className="w-full rounded-xl border border-[#d8b8ad] bg-white px-4 py-3 outline-none focus:border-[#b87572]" >
</textarea>
</div>
<button
  type="submit"
  className="w-full rounded-xl bg-[#b87572] px-4 py-3 font-semibold text-white transition hover:bg-[#9f625f]">
  Send Message
</button>
{status && (
  <p
  className={`mt-4 text-center ${
    statusType === "error" ? "text-red-600" : "text-green-600"
  }`}
>
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