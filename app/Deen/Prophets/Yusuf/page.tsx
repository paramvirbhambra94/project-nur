import Link from "next/link";

const lessons = [
  {
    title: "Allah’s plan is unfolding even when life feels confusing",
    text: "Yusuf’s life moved through betrayal, separation, temptation, prison, and honor. His story teaches that Allah’s wisdom can be hidden for a long time.",
  },
  {
    title: "Purity in private matters to Allah",
    text: "Yusuf teaches restraint, sincerity, and fear of Allah in moments where nobody else may be watching.",
  },
  {
    title: "Forgiveness is strength",
    text: "When Yusuf was finally in a position of power, he chose generosity and forgiveness. His story teaches noble character after hardship.",
  },
];

const dailyLife = [
  "When life feels unfair, trust that Allah may still be arranging good beyond what you can see.",
  "Protect your heart in moments of temptation, especially when nobody else would know.",
  "Do not let betrayal make you bitter or faithless.",
  "When Allah gives you strength or status, use it with mercy.",
  "Learn to forgive without pretending the pain never happened.",
];

const heartQuestions = [
  "Do I trust Allah’s plan only when I understand it?",
  "How do I behave when no one else sees me?",
  "Have painful experiences made me bitter or brought me closer to Allah?",
  "Would I choose forgiveness if Allah gave me the upper hand?",
  "What hidden wisdom might Allah be shaping in my life right now?",
];

export default function YusufPage() {
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
            Yusuf
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of beauty, patience, purity, wisdom, and forgiveness.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Yusuf’s story is one of the most beloved stories in the Quran. It
            teaches the believer how Allah’s plan unfolds through hardship,
            how purity protects the soul, and how forgiveness beautifies power.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Indeed, whoever fears Allah and is patient, then surely Allah does not allow the reward of the doers of good to be lost.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Yusuf 12:90
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Yusuf’s story is proof that patience and taqwa are never wasted.
            Allah does not lose the effort of the one who remains sincere.
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
            The story of Yusuf
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Yusuf faced hardship from a young age: jealousy from his brothers,
              separation from his father, being thrown into a well, sold away,
              then tested again through temptation and prison.
            </p>

            <p>
              Yet none of those stages were outside Allah’s plan. What looked
              like loss again and again was actually part of a larger unfolding
              mercy. Allah raised Yusuf with wisdom, honor, and influence at the
              right time.
            </p>

            <p>
              Yusuf teaches the believer to remain pure in private, patient in
              hardship, and generous when finally given strength. His story is a
              school of trust in Allah.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Yusuf lives in daily life
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
            Yusuf teaches that Allah’s wisdom may be hidden, but it is never absent.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer remains patient, pure, and trusting — knowing that
            Allah can turn years of hardship into mercy, honor, and opening.
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
