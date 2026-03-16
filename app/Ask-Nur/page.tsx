const prompts = [
  "What is a Surah?",
  "Who was Prophet Musa?",
  "What does tawakkul mean?",
  "Why do Muslims pray?",
];

export default function AskNurPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f]">
      <section className="border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Ask Nur
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Ask simple questions in a space designed for clarity and gentle
            guidance.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Ask Nur will help users understand Islamic concepts in a simple,
            beginner-friendly way — without pretending to replace scholarship.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[30px] border border-[#e3d8c8] bg-[#fffaf2] p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Suggested prompts
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2 text-sm text-[#4f7a5a]"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}