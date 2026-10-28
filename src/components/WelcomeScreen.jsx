import { useEffect, useState } from "react";

export default function WelcomeScreen({ onComplete }) {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "Hola", lang: "Spanish" },
    { text: "Welcome", lang: "English" },
  ];

  useEffect(() => {
    // Cycle greeting words
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev < greetings.length - 1 ? prev + 1 : prev));
    }, 450);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    // Fade out and finish
    const exitTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
    }, 2100);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#fffaf5] px-6 py-12 transition-all duration-700 ease-in-out ${
        isFadingOut ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}>
      {/* Top Tagline */}
      <div className="flex items-center gap-2 rounded-full border border-[#eedfd0] bg-[#f8f3ed] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#8b5e52]">
        <span className="inline-block h-2 w-2 animate-ping rounded-full bg-[#b87572]" />
        <span>PORTFOLIO 2026</span>
      </div>

      {/* Center Animated Greeting & Title */}
      <div className="flex flex-col items-center text-center">
        <h1 className="h-20 text-5xl font-bold tracking-tight text-[#1f1a17] transition-all duration-300 md:text-7xl">
          <span className="text-[#b87572]">{greetings[greetingIndex].text}</span>
        </h1>

        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="text-xl font-medium text-[#4b3621] md:text-2xl">
            I'm <span className="font-semibold text-[#1f1a17]">Muskan Gupta</span>
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f4e9df] px-4 py-1.5 text-xs font-medium text-[#8b5e52]">
            <span>⚡ Member @ Cloud Computing Cell (CCC)</span>
            <span>•</span>
            <span>Frontend Developer</span>
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="mt-8 w-48 overflow-hidden rounded-full bg-[#eedfd0] p-0.5">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-[#b87572] to-[#4b3621] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Skip button */}
      <button
        onClick={handleSkip}
        className="text-xs font-medium text-[#8b5e52] underline underline-offset-4 transition hover:text-[#1f1a17]">
        Skip Intro →
      </button>
    </div>
  );
}
