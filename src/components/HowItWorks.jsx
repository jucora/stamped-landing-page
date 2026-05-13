import { useReveal } from "../hooks/useReveal";

const features = [
  {
    title: "Create your projects",
    desc: "Define deliverables, deadlines, and payment terms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M14 19h6" />
        <path d="M17 16v6" />
      </svg>
    ),
  },
  {
    title: "Send the client link",
    desc: "Your client reviews and confirms with a secure verification code in one tap.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <line
          x1="8"
          x2="16"
          y1="12"
          y2="12"
        />
      </svg>
    ),
  },
  {
    title: "Track delivery and approvals",
    desc: "Every submission, approval, and update is timestamped and recorded.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13 5h8" />
        <path d="M13 12h8" />
        <path d="M13 19h8" />
        <path d="m3 17 2 2 4-4" />
        <path d="m3 7 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Export your project record",
    desc: "Generate a professional PDF snapshot at anytime.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M12 18v-6" />
        <path d="m9 15 3 3 3-3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section
      id="features"
      className="py-24 px-[5%] bg-gray-200/60"
    >
      <div
        ref={ref}
        className="reveal max-w-6xl mx-auto"
      >
        <h2 className="my-4 text-xs md:text-sm font-semibold uppercase tracking-wide text-(--purple)">
          How it works
        </h2>

        <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-xl lg:max-w-2xl mb-10">
          Start, manage, and complete your client workflow in one place
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border border-gray-300 rounded-xl overflow-hidden">
          {features.map(({ title, desc, icon }, index) => (
            <FeatureCard
              key={title}
              title={title}
              desc={desc}
              icon={icon}
              index={index}
              total={features.length}
            />
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
}

function FeatureCard({ title, desc, icon, index, total }) {
  // Divider logic — avoids double borders by only adding right/bottom on non-edge cells
  const isLastInRow2col = index % 2 === 1; // right edge in 2-col layout
  const isLastInRow4col = index === total - 1; // right edge in 4-col layout
  const isFirstTwoRows = index < 2; // top row in 2-col (needs bottom border)

  return (
    <div
      className={[
        "group bg-white p-6 transition-colors duration-300 hover:bg-purple-50/50",
        !isLastInRow2col && "sm:border-r border-gray-300", // right divider: always except last in each row
        index === 1 && "xl:border-r xl:border-gray-300", // on xl, restore right border for col 1 (index 1) and remove for last
        isLastInRow4col && "xl:border-r-0", // on xl, restore right border for col 1 (index 1) and remove for last
        isFirstTwoRows && "border-b border-gray-300 xl:border-b-0", // bottom divider: only first row in 2-col; on xl remove all bottom borders
        index === 2 && "border-b border-gray-300 sm:border-b-0", // in 2-col, index 2 also needs bottom border (it's in the top of its pair)
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-8 h-8 p-1.5 rounded-[10px] bg-purple-100/50 flex items-center justify-center text-(--purple) group-hover:bg-(--purple) group-hover:text-white transition duration-300">
          {icon}
        </div>
        <span className="text-sm text-gray-400 font-mono">0{index + 1}</span>
      </div>

      <h3 className="text-[0.9375rem] font-bold tracking-[-0.01em] mb-1.5">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
