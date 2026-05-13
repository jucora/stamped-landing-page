import { useState } from "react";

export default function WaitlistForm({ dark = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-sm font-semibold py-2 px-5 rounded-full bg-green-100 text-green-500 max-w-fit mx-auto">
        ✔️ You're on the list! We'll be in touch.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div
        className={`flex flex-col sm:flex-row gap-2 p-1.5 rounded-xl border ${dark ? "bg-(--purple) -500 /10 border-white/20" : "bg-white border-gray-300"} max-w-lg mx-auto`}
      >
        <input
          id={dark === true ? "cta1" : "cta2"}
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={`flex-1 bg-transparent px-3 py-2 rounded-lg text-sm outline-none placeholder:text-gray-400 disabled:opacity-50 ${dark ? "text-gray-700 bg-white" : "text-gray-700"}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="cursor-pointer border border-gray-200/50 inline-flex items-center justify-center gap-2 bg-(--purple) hover:bg-(--purple-dark) disabled:opacity-60 text-sm text-white px-5 py-2 sm:py-2 rounded-lg font-semibold transition-all duration-200 group shrink-0"
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="5.5"
                  stroke="currentColor"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 1.5a5.5 5.5 0 0 1 5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Joining...
            </>
          ) : (
            <>
              Join the waitlist
              <span className="inline-block group-hover:translat-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 7h8M7 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </>
          )}
        </button>
      </div>

      {status === "error" && (
        <p className={`mt-2 text-xs ${dark ? "text-red-400" : "text-red-500"}`}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
