import { Phone } from "lucide-react";

export default function Banner() {
  return (
    <main className="bg-white">
      <section
        className="relative bg-cover bg-center px-6 py-20 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-4 mt-18 font-serif text-3xl md:mt-30 md:text-4xl">
            Construction Company Haldwani Reviews
          </h1>
          <p className="mx-auto mb-6 max-w-4xl text-xl">
            Learn how to evaluate construction company reviews, verify
            feedback, and compare builders for your Haldwani project. Speak
            with past clients, review completed work, and confirm the scope,
            schedule, and costs before making a decision.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+919927611780">
              <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 font-semibold shadow-lg transition hover:opacity-90">
                <Phone size={18} />
                <span className="text-base">+91 9927611780</span>
              </button>
            </a>
            <a href="mailto:spacebuild.india@gmail.com">
              <button className="rounded-xl border-2 border-white bg-transparent px-5 py-3 font-semibold transition hover:bg-white hover:text-gray-800">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
