import Link from "next/link";

const lessons = [
  {
    title: "Beautiful patience is real strength",
    text: "Yaqub teaches that patience is not numbness. It is feeling pain deeply while still refusing to lose trust in Allah.",
  },
  {
    title: "Hope in Allah should never die",
    text: "Even through grief and separation, Yaqub did not despair of Allah’s mercy. His story teaches enduring hope.",
  },
  {
    title: "Turning sorrow into dua",
    text: "Yaqub did not carry grief alone. He took his sorrow to Allah, and that is one of the believer’s greatest shelters.",
  },
];

const dailyLife = [
  "When grief comes, keep speaking to Allah instead of sinking into despair.",
  "Do not let hardship make you think Allah has abandoned you.",
  "Hold onto hope even when the answer feels delayed.",
  "Let pain soften your dependence on Allah, not weaken it.",
  "Practice patient trust in family struggles, losses, and waiting.",
];

const heartQuestions = [
  "When I am hurting, do I turn to Allah or close inwardly on myself?",
  "Have I started to lose hope in Allah in any part of my life?",
  "Do I confuse patience with pretending I do not feel pain?",
  "How often do I bring my sorrow honestly to Allah in dua?",
  "What would beautiful patience look like for me right now?",
];

export default function YaqubPage() {
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
            Yaqub
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of grief, beautiful patience, and unbroken hope in Allah.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Yaqub teaches the believer how to carry sorrow without letting go of
            faith. His story is one of deep love, separation, tears, patience,
            and certainty that Allah’s mercy is always near.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “So patience is most fitting. And Allah is the One sought for help…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Yusuf 12:18
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Yaqub’s story shows that patience is not the absence of pain. It is
            pain carried with trust, humility, and continued turning to Allah.
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
            The story of Yaqub
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Yaqub was a prophet and the father of a family through which many
              important lessons unfolded. His life is especially remembered
              through the story of Yusuf and the long separation that tested his
              heart.
            </p>

            <p>
              He experienced grief deeply, yet he never let grief turn into
              despair of Allah. He remained patient, hopeful, and devoted,
              carrying his pain with dignity and prayer.
            </p>

            <p>
              Yaqub teaches the believer that sorrow does not mean the end of
              faith. It can become a path of nearness when it is carried with
              sabr and brought sincerely to Allah.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Yaqub lives in daily life
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
            Yaqub teaches that grief and hope can live together in the same believing heart.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer cries, waits, hopes, and keeps turning to Allah —
            trusting that His mercy can bring relief even after long years.
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
