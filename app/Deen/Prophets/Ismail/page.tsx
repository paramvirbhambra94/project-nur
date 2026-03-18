import Link from "next/link";

const lessons = [
  {
    title: "Obedience can be beautiful",
    text: "Ismail is remembered for willing submission to Allah’s command. His story teaches that obedience, even when costly, is a form of beauty in faith.",
  },
  {
    title: "Trust in Allah brings calm",
    text: "Ismail’s story is marked by trust. He teaches the believer that surrender to Allah is not panic — it is peace in His wisdom.",
  },
  {
    title: "Faith shows in action",
    text: "Ismail is not only remembered for belief, but for responding. True faith lives in what the heart accepts and what the body carries out.",
  },
];

const dailyLife = [
  "Respond to Allah’s commands with willingness, not resentment.",
  "Trust that what Allah asks of you is never empty of wisdom.",
  "Let obedience be something your heart grows to love.",
  "Practice surrender in smaller daily moments so the heart becomes stronger.",
  "Remember that true faith is not only words, but willing response.",
];

const heartQuestions = [
  "Do I obey Allah only when it feels easy, or also when it costs me something?",
  "What command from Allah do I still resist inwardly?",
  "Do I trust Allah’s wisdom when I do not fully understand something?",
  "Have I trained my heart to respond quickly to obedience?",
  "What would greater surrender look like in my life today?",
];

export default function IsmailPage() {
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
            Ismail
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet remembered for willing obedience, trust, and calm surrender.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Ismail’s story shines with obedience to Allah and trust in His
            wisdom. He teaches the believer that surrender is not humiliation —
            it is honor when it is for the sake of Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “O my father, do as you are commanded…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah As-Saffat 37:102
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            These words hold deep faith. Ismail’s response teaches the heart
            that obedience to Allah, even in a heavy moment, can be met with
            calm trust.
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
            The story of Ismail
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Ismail was the son of Ibrahim and one of the blessed prophets in
              the prophetic line. His story is closely tied to sacrifice,
              obedience, and trust in Allah.
            </p>

            <p>
              When Ibrahim shared the command he had been given, Ismail
              responded with remarkable submission. He did not answer with
              rebellion, but with trust that Allah’s command is always best.
            </p>

            <p>
              Ismail teaches that real faith appears when a believer responds to
              Allah with a willing heart. Surrender is not weakness. It is one
              of the strongest forms of faith.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Ismail lives in daily life
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
            Ismail teaches that obedience to Allah can be calm, willing, and beautiful.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The stronger a person’s trust in Allah becomes, the more their heart
            learns to surrender without bitterness and obey without hesitation.
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
