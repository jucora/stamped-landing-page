import { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear().toString());

  return (
    <footer className="bg-gray-50 px-6 md:px-[10%]">
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mt-20 py-8 md:py-12 px-2 border-t border-gray-400">
          <span className="block h-4 md:h-5 w-4 md:w-5 text-gray-900">
            <a
              href="https://x.com/trystamped"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                stroke="currentColor"
              >
                <g>
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"
                  ></path>
                </g>
              </svg>
            </a>
          </span>

          <p>© {year} Stamped. All rights reserved.</p>
        </div>
    </footer>
  );
}
