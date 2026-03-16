const reflections = [
  "Mercy",
  "Patience",
  "Gratitude",
  "Tawakkul",
  "Beginnings",
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f]">
      <section className="border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Explore
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Browse themes, reminders, and reflections that keep the heart
            connected.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Explore is the softer side of Project Nur — a place for meaningful
            themes, featured reminders, and gentle discovery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {reflections.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Theme
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{item}</h2>
              <p className="mt-4 text-base leading-8 text-[#5e6558]">
                A curated space to reflect on {item.toLowerCase()} through Quran,
                reminders, and simple spiritual guidance.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}