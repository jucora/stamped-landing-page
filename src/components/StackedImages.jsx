import { useState } from "react";
import screenshotOne from "../assets/ss1.png";
import screenshotTwo from "../assets/ss2.png";

export default function StackedScreenshots() {
  const [flipped, setFlipped] = useState(false);

  const front = flipped ? screenshotTwo : screenshotOne;
  const back = flipped ? screenshotOne : screenshotTwo;

  return (
    <div className="relative w-full max-w-6xl h-96 md:h-144 mx-auto select-none">
      <div
        onClick={() => setFlipped(!flipped)}
        className="absolute inset-0 cursor-pointer"
        style={{
          transform: "rotate(4deg) translateY(10px)",
          zIndex: 1,
          transition: "transform 0.3s ease, z-index 0s",
        }}
      >
        <img
          src={back}
          alt="App screenshot"
          className="w-full h-full object-cover object-top rounded-2xl border border-gray-200 shadow-md"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          transform: "rotate(-2deg)",
          zIndex: 2,
          transition: "transform 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <img
          src={front}
          alt="App screenshot"
          className="w-full h-full object-cover object-top rounded-2xl border border-gray-200 shadow-xl"
        />
      </div>
    </div>
  );
}
