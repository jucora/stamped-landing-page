import { useState } from "react";

const faqs = [
  {
    question: "What is Stamped, and how does it help me?",
    answer:
      "Stamped helps freelancers manage client work with a structured, timestamped record from agreement to delivery to approval. Instead of relying on scattered chats and verbal agreements, you create a project, send your client a shared link, and track deliverables, approvals, and payment status in one place.",
  },
  {
    question: "Does my client need an account?",
    answer:
      "No. Your client opens a shared link, reviews the project, and confirms with a one-time verification code. No signup, no app download, and no onboarding required.",
  },
  {
    question: "How is this different from using WhatsApp or email? ",
    answer:
      "WhatsApp and email help you communicate, but they don’t create a structured record of what was agreed, delivered, or approved. Stamped provides both you and your client with a shared source of truth throughout the project.",
  },
  {
    question: "What happens after my client confirms?",
    answer:
      "Once a client confirms, the original agreement becomes locked. Deliverables, approvals, and revision requests are then recorded on the project timeline, without changing the original scope.",
  },
  {
    question: "What if my client stops responding or refuses to pay?",
    answer:
      "Stamped cannot force payment, but it gives you a significantly stronger position than informal chats alone. Even if a client becomes unresponsive, the system still maintains a structured, timestamped history of the project and the work delivered.",
  },
  {
    question: "What’s included in the PDF export? ",
    answer:
      "The PDF includes the full project record — agreed terms, timestamps, deliverables, approvals, payment status, and project activity history. It acts as a professional snapshot of the project at the moment of export.",
  },
  {
    question: "Is this a legal contract?",
    answer:
      "No. Stamped is not a legal contract. It is a structured, system-generated record created through participation from both parties. In most freelance disputes, having a clear shared  record is often more valuable than relying on memory or scattered messages.",
  },
  {
    question: "Is Stamped free?",
    answer:
      "Yes. Stamped will launch with a free plan. More details on pricing will be shared closer to launch.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left gap-4"
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <span
          className={`text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="border-t border-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
