import Link from "next/link";

const lessons = [
  {
    title: "Patience can stay beautiful through long hardship",
    text: "Ayyub teaches that patience is not a cold performance. It is deep endurance with dignity, sincerity, and continued turning to Allah.",
  },
  {
    title: "Suffering does not mean Allah has abandoned you",
    text: "Ayyub’s story reminds the believer that hardship is not proof of distance from Allah. It can be a place of nearness, purification, and elevation.",
  },
  {
    title: "Dua belongs inside hardship",
    text: "Ayyub did not stop turning to Allah. His story teaches the believer to keep asking Allah gently and sincerely, even after long difficulty.",
  },
];

const dailyLife = [
  "Do not assume hardship means Allah does not care for you.",
  "Carry difficulty with dignity and keep your tongue connected to Allah.",
  "Practice patience without pretending pain is easy.",
  "Let trials increase your dua, not reduce it.",
  "Remember that relief can come after long hardship by Allah’s mercy.",
];

const heartQuestions = [
  "When I go through hardship, do I move toward Allah or away from Him?",
  "Have I mistaken prolonged difficulty for abandonment?",
  "Do I still make dua with hope when relief feels delayed?",
  "What does beautiful patience look like in my current test?",
  "Can I endure while still speaking well of Allah?",
];

export default function AyyubPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,122,90,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(176,141,87,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Link
            href="/Deen/Prophets"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Prophets
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Ayyub
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of beautiful patience, dignity in suffering, and steady turning to Allah.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Ayyub teaches the believer how to endure hardship without losing
            faith, manners, or hope. His story is a reminder that pain can live
            beside deep trust in Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Indeed, adversity has touched me, and You are the Most Merciful of the merciful.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-Anbiya 21:83
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Ayyub’s words are soft, humble, and full of adab with Allah. Even
            in pain, he turned to Allah with hope, not bitterness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {lessons.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Lesson
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#5e6558]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            The story of Ayyub
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Ayyub is remembered for long hardship and for the way he carried
              it. He suffered deeply, yet he did not let pain destroy his
              relationship with Allah.
            </p>

            <p>
              His story teaches that trials can last, and still the believer can
              remain sincere, patient, and hopeful. He turned to Allah with
              humility and beautiful speech rather than despair or rebellion.
            </p>

            <p>
              Ayyub shows that sabr is not pretending things do not hurt. It is
              enduring while keeping faith alive and the heart turned toward the
              Most Merciful.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Ayyub lives in daily life
          </p>

          <div className="mt-5 space-y-4 text-base leading-8 text-[#5e6558]">
            {dailyLife.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Questions for the heart
          </p>

          <div className="mt-5 space-y-4 text-base leading-8 text-[#5e6558]">
            {heartQuestions.map((item) => (
              <p key={item}>• {item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Ayyub teaches that patience is most beautiful when it stays connected to Allah.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Hardship does not cancel Allah’s mercy. The believing heart endures,
            asks, and waits — trusting that relief remains with Him.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/Deen/Prophets"
              className="rounded-full bg-[#4f7a5a] px-6 py-3 text-sm font-semibold text-[#f7f2e8]"
            >
              Back to Prophets
            </Link>

            <Link
              href="/Quran"
              className="rounded-full border border-[#d9cfbc] bg-white px-6 py-3 text-sm font-semibold text-[#4f7a5a]"
            >
              Return to Quran
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
