import { useReveal } from "../hooks/useReveal";

export default function Positioning() {
  const ref = useReveal();

  return (
    <section className="px-6 py-20">
      <div
        ref={ref}
        className="reveal"
      >
        <div className="text-center">
          <h2 className="my-4 text-xs md:text-sm font-semibold uppercase tracking-wide text-(--purple)">
            Why Stamped?
          </h2>

          <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-lg mx-auto">
            Freelance projects move fast, you shouldn't lag behind
          </p>

          <p className="md:px-5 text-gray-500 leading-relaxed max-w-4xl mx-auto my-6">
            As work progresses, agreements get buried in chats, scope changes
            become unclear, and payment conversations turn messy. Stamped moves
            with you — a structured, shared record documenting every step, from
            first agreement to final approval, so that expectations stay clear.
          </p>
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .steps-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
