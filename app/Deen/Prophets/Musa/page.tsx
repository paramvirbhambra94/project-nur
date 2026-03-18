import Link from "next/link";

const lessons = [
  {
    title: "Courage grows through reliance on Allah",
    text: "Musa’s life teaches that courage is not the absence of fear. It is moving forward while trusting Allah’s help and command.",
  },
  {
    title: "Leadership is a trust",
    text: "Musa carried a heavy mission. His story reminds the believer that responsibility should lead to humility, dua, and dependence on Allah.",
  },
  {
    title: "Allah delivers when the path seems blocked",
    text: "From danger in his early life to the sea opening before him, Musa teaches that Allah can make a way where none seems possible.",
  },
];

const dailyLife = [
  "Face difficult responsibilities with dua and trust in Allah.",
  "Do not think fear means you cannot still obey Allah courageously.",
  "Ask Allah for clarity, strength, and ease when tasks feel heavy.",
  "Remember that leadership begins with responsibility, not ego.",
  "Trust that Allah can open a path even when circumstances feel impossible.",
];

const heartQuestions = [
  "Do I avoid difficult truths because they scare me?",
  "When responsibility comes, do I rely on myself or ask Allah for help?",
  "What mission or duty in my life needs more courage right now?",
  "Do I believe Allah can open a path for me when everything feels blocked?",
  "How can I carry responsibility with more humility?",
];

export default function MusaPage() {
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
            Musa
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of courage, struggle, leadership, and deliverance through Allah’s help.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Musa is one of the most mentioned prophets in the Quran. His life
            teaches the believer how to carry heavy responsibility, speak truth
            before power, and trust Allah when the path feels impossible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “My Lord, expand for me my chest, and ease for me my task…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Ta-Ha 20:25-26
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Musa teaches the believer to meet responsibility with dua. The heart
            does not carry the mission alone — it asks Allah for expansion,
            ease, and help.
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
            The story of Musa
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Musa’s life moved through danger, calling, leadership, struggle,
              and confrontation with tyranny. He was chosen by Allah for a great
              mission and supported through revelation and mercy.
            </p>

            <p>
              He stood before Fir‘awn, led his people, and carried enormous
              pressure. Yet again and again, Allah opened ways for him, taught
              him, and strengthened him through revelation and trust.
            </p>

            <p>
              Musa teaches the believer that big responsibilities are not meant
              to be carried with ego or self-reliance. They are carried with
              courage, dua, and deep dependence on Allah.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Musa lives in daily life
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
            Musa teaches that courage becomes beautiful when it leans on Allah.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer faces heavy tasks by asking Allah for strength, clarity,
            and opening — knowing that deliverance remains in His hand alone.
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
