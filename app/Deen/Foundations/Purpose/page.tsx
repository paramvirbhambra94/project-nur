import Link from "next/link";

const signs = [
  {
    title: "You were not created without meaning",
    text: "A believer is not random, forgotten, or pointless. Allah created you with wisdom, purpose, and a path meant to bring you back to Him.",
  },
  {
    title: "Your purpose is worship",
    text: "Worship is broader than rituals alone. It is living in obedience to Allah, loving what He loves, and turning your whole life into sincerity and submission.",
  },
  {
    title: "Purpose gives direction",
    text: "When a person knows why they are here, choices become clearer, distractions become smaller, and hardship becomes easier to place in the right frame.",
  },
];

const dailyLife = [
  "Begin the day remembering that your life belongs to Allah, not to your moods, distractions, or the opinions of people.",
  "Treat salah as part of your purpose, not as something separate from the rest of life.",
  "Do ordinary things with sincere intention so even daily tasks can become worship.",
  "When you feel lost, return to the question: what would bring me nearer to Allah right now?",
  "Measure success not only by achievement in dunya, but by sincerity, obedience, and what your heart is becoming before Allah.",
];

const heartQuestions = [
  "What am I living for most deeply right now?",
  "Do I organize my life around worship, or try to fit worship around everything else?",
  "What distractions have become larger in my heart than my real purpose?",
  "When I feel empty, do I return to Allah or only seek more noise?",
  "If I remembered that I was created to worship Allah, what would I change first?",
];

export default function PurposePage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,122,90,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(176,141,87,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Link
            href="/Deen/Foundations"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Foundations
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Purpose
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            You were created for more than drifting through life.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            One of the heaviest feelings in life is to move without knowing why.
            Islam lifts that fog. It teaches that your life has meaning, your
            existence has purpose, and your heart was created to know, worship,
            and return to Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And I did not create jinn and mankind except to worship Me.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Adh-Dhariyat 51:56
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This ayah does not shrink life. It clarifies it. Your purpose is not
            confusion, performance, or endless chasing. Your purpose is to live
            as a servant of Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {signs.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Reminder
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
            What purpose means in Islam
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Purpose in Islam is not merely finding a career, passion, or role.
              Those things may matter, but they are not the deepest answer.
            </p>

            <p>
              The deepest answer is that you were created to worship Allah. That
              means to know Him, obey Him, love Him, seek His pleasure, and live
              in a way that brings you nearer to Him.
            </p>

            <p>
              When that foundation is clear, everything else in life finds its
              place. Work, study, family, effort, rest, and even hardship are
              no longer empty parts of life. They become part of a journey back
              to Allah.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How to live with purpose daily
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
            Surah Adh-Dhariyat 51:56
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Wa mā khalaqtul-jinna wal-insa illā liya‘budūn
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            And I did not create jinn and mankind except to worship Me.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            This verse clears the noise. You are not here without meaning. You
            are here to live as a servant of Allah and to return to Him with a
            sincere heart.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            A life without purpose feels scattered. A life built around worship
            begins to gather itself.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The more clearly you remember why you were created, the easier it
            becomes to let go of what distracts, endure what tests you, and move
            toward Allah with sincerity.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/Deen/Foundations"
              className="rounded-full bg-[#4f7a5a] px-6 py-3 text-sm font-semibold text-[#f7f2e8]"
            >
              Back to Foundations
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
