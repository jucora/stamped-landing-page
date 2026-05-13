import { useScrolled } from "../hooks/useScrolled";
import stampedLogo from "../assets/stamped-logo.png";

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/60 backdrop-blur-sm border-b border-white/40 shadow-sm"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-0 py-2 md:mx-[10%]">
        <a
          href="#hero"
          className="h-14 md:h-16 flex items-center"
        >
          <img
            src={stampedLogo}
            alt="Stamped logo"
            className="h-full w-auto object-cover"
          />
        </a>

        <a href="#cta2" className="bg-(--purple) rounded-md text-white font-semibold text-xs md:text-sm py-2 px-4 md:px-10">
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
