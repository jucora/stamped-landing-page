import { useEffect } from "react";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("visible"));
    }, 100);
  }, []);

  return (
    <section
    className="bg-[radial-gradient(ellipse_80%_100%_at_40%_0%,rgba(139,92,246,0.12)_50%,transparent_70%)]"
      id="hero"
    >
      <div className="px-6 pt-30 mx-auto w-full items-center text-left md:text-center">
        <div
          className="reveal max-w-lg md:max-w-3xl mx-auto"
          style={{ transitionDelay: "0ms" }}
        >
          <div className="inline-flex items-center bg-purple-50 border border-gray-300 px-2.5 py-0.5 rounded-full shadow-sm text-xs font-medium text-(--purple)">
            <span className="bg-purple-600 w-1.5 h-1.5 rounded-full animate-pulse mr-1.5" />
            Get early access, join the waitlist
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight md:leading-[1.1] text-gray-800 pt-10">
            Set up your first client project in
            <span className="text-(--purple)"> under 2 minutes</span>
          </h1>

          <p className="text-gray-500 leading-relaxed pr-4 md:pr-0 py-4 md:py-8 max-w-lg mx-auto">
            No client signups. Just a shared link they confirm in one tap — and
            a complete record from start to finish.
          </p>

          <WaitlistForm dark />
        </div>

        <div
          className="reveal"
          style={{ transitionDelay: "120ms" }}
        >
          {/* <img
            src={stampedScreenshot}
            alt="Stamped Screenshot"
            className="object-cover h-full w-full"
          /> */}
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
}
