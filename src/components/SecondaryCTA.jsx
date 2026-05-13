import { useReveal } from "../hooks/useReveal";
import WaitlistForm from "./WaitlistForm";

export default function SecondaryCTA() {
  const ref = useReveal();

  return (
    <section id="cta">
      <div className="relative overflow-hidden rounded-3xl mx-6 md:mx-[10%] py-10 md:py-20 bg-[#0F0A1E] text-center">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-1/2 bg-[radial-gradient(ellipse,rgba(124,58,237,0.18)_0%,transparent_70%)]" />

        <div
          ref={ref}
          className="reveal relative z-10 mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white px-14">
            Built for how
            <br />
            freelancers actually work
          </h2>

          <p className="my-5 md:my-10 px-6 mx-auto max-w-xl text-[#A78BFA]">
            Clear agreements, structured delivery, everything on record. Be the
            first to use Stamped when we launch.
          </p>

          <div className="p-6 md:py-0">
            <WaitlistForm />
          </div>
        </div>

        <style>{`
          .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
          .reveal.visible { opacity: 1; transform: translateY(0); }
        `}</style>
      </div>
    </section>
  );
}
