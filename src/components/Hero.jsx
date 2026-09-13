import profileImage from '../assets/profile.jpg'
function Hero() {
  return (
    <section id="home" className="bg-[#f8f3ed] px-6 py-20 text-left  md:py-16 ">
       <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">

    <div className="w-full md:w-1/2">

        <p className="mb-1 text-lg text-[#8b5e52]">
        Hi, I'm
      </p>
      <h1 className=" mmt-0 ,mb-4 text-5xl font-semibold text-[#1f1a17] mb-5 md:text-6xl ">
  Muskan <span className="text-[#b87572]">Gupta</span>
</h1>
      
         <h2 className="text-2xl font-medium text-[#8b5e52] mb-4">
  Frontend Developer
</h2>
<p className="max-w-xl text-lg leading-8 text-[#5f5147] mb-7">

        I'm a Computer Science and engineering student specializing in data Science, 
        interested in web development and learning new technology .</p>
         <a
  href="#projects"
  className="inline-block rounded-full bg-[#2b2521] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#4b3621]">
  View My Projects →
</a>
     </div>

    <div className="flex w-full items-center justify-center md:mt-10 md:w-1/2 md:justify-end">
         <img
       src={profileImage}
      alt="Muskan Gupta"
  className="h-[420px] w-[350px] shrink-0 rounded-[30px] object-cover"/>
         </div>
         </div>
    </section>
  )
}

export default Hero