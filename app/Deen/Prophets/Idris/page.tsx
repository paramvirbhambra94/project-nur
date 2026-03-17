import Link from "next/link";

const lessons = [
  {
    title: "Truthfulness raises a person",
    text: "Idris is remembered with truthfulness and sincerity. Allah raises the one who is truthful with Him and upright in their path.",
  },
  {
    title: "Wisdom is a gift and a trust",
    text: "Idris is associated with wisdom and knowledge. Knowledge is not for pride — it is for guidance, humility, and living rightly.",
  },
  {
    title: "Quiet righteousness matters",
    text: "Some prophetic stories are brief in mention but deep in meaning. A life of steady truth may be quiet, but it is weighty with Allah.",
  },
];

const dailyLife = [
  "Speak truthfully even when exaggeration or shortcuts feel easier.",
  "Treat knowledge as something to live by, not just collect.",
  "Choose consistency over showing off, because quiet sincerity is beloved to Allah.",
  "Let your private character match what people see from you publicly.",
  "Remember that Allah can raise a person through truth, patience, and sincerity.",
];

const heartQuestions = [
  "Am I truthful with Allah, with people, and with myself?",
  "Do I seek knowledge for guidance or only for appearance?",
  "Would my private life reflect the same truthfulness as my public life?",
  "Do I underestimate quiet acts of righteousness because they are not seen?",
  "What would it look like for me to become more sincere and upright this week?",
];

export default function IdrisPage() {
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
            Idris
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of truthfulness, wisdom, and quiet elevation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Idris is mentioned briefly in the Quran, but his mention carries
            weight. He is remembered for truthfulness, patience, and being
            raised to a high station. His story teaches that sincere uprightness
            is never small with Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And mention in the Book Idris. Indeed, he was a man of truth and a prophet.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Maryam 19:56
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Sometimes a short mention is enough to teach a lifelong lesson.
            Truthfulness is not small in Islam. It is a quality that raises a
            person in the sight of Allah.
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
            What we learn from Idris
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              The Quran does not give a long narrative about Idris, but it gives
              something precious: a description of his character. He was
              truthful, and he was a prophet.
            </p>

            <p>
              In another place, Allah mentions that He raised him to a high
              station. This teaches that real elevation is not fame, noise, or
              recognition in dunya. Real elevation is nearness to Allah.
            </p>

            <p>
              Idris reminds the believer that quiet sincerity, truthful living,
              and upright character may look small in the eyes of people, but
              they are immense with Allah.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Idris lives in daily life
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

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            A verse to return to
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Maryam 19:56
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            وَٱذْكُرْ فِى ٱلْكِتَـٰبِ إِدْرِيسَ ۚ إِنَّهُۥ كَانَ صِدِّيقًۭا نَّبِيًّۭا
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Wadhkur fil-kitābi Idrīs, innahu kāna ṣiddīqan nabiyyā
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            And mention in the Book Idris. Indeed, he was a man of truth and a
            prophet.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            This verse is short, but it carries a life goal: to be truthful with
            Allah and to live in a way that is clean, upright, and sincere.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Idris teaches that truthfulness is a path to elevation.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            A believer does not need noise to matter. Sincere truth, beneficial
            knowledge, and quiet righteousness are enough to raise a person in
            the sight of Allah.
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
