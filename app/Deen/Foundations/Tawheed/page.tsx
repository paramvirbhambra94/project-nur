import Link from "next/link";

const anchors = [
  {
    title: "Allah alone is worthy of worship",
    text: "Tawheed begins with directing worship, love, hope, fear, reliance, and obedience to Allah alone without partners.",
  },
  {
    title: "The heart was created to know Him",
    text: "A heart that does not know its Lord stays restless. Tawheed brings direction, peace, and purpose to a person’s life.",
  },
  {
    title: "Tawheed is lived, not just studied",
    text: "It appears in dua, salah, trust, repentance, gratitude, hope, and in the way a person turns back to Allah sincerely.",
  },
];

const dailyPractice = [
  "Call upon Allah first before anyone else when you are afraid, confused, or in need.",
  "Pray with the awareness that you are standing before the One who created, hears, and sees you.",
  "When something goes well, thank Allah first instead of letting the heart become attached only to means.",
  "When something goes wrong, return to Allah with patience and trust instead of despairing in people or circumstances.",
  "Ask Allah often for guidance, firmness, sincerity, and protection from relying too heavily on creation.",
  "Learn and reflect on the names and attributes of Allah so your worship becomes more personal, alive, and sincere.",
];

const weakensTawheed = [
  "Showing off in worship so people notice you.",
  "Depending on people inwardly in a way that belongs only to Allah.",
  "Fearing creation more deeply than the Creator.",
  "Thinking success, peace, or protection come from created things independently of Allah.",
];

const strengthensTawheed = [
  "Sincere dua made often and privately.",
  "Guarding the salah and returning to it with presence.",
  "Frequent repentance and asking Allah to purify the heart.",
  "Reading Quran while trying to reflect on who Allah is and what He is calling you to.",
  "Regular remembrance of Allah in ease before hardship comes.",
];

const heartQuestions = [
  "When I feel overwhelmed, who does my heart run to first?",
  "Whose approval do I fear losing most?",
  "What do I rely on too much besides Allah?",
  "Do I speak to Allah in dua with real need and honesty?",
  "Is my worship drawing me nearer to Allah, or am I moving through it absent-mindedly?",
];

export default function TawheedPage() {
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
            Tawheed
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Know Allah, worship Him alone, and let the heart find its direction.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Tawheed is the beginning of everything. It is the foundation of
            Islam, the root of sincerity, and the truth that gives meaning to
            worship, purpose to life, and stability to the heart.
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
            The one who understands Tawheed begins to understand life itself:
            why they are here, who they belong to, who they call upon, and where
            true peace is found.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {anchors.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Anchor
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
            What Tawheed means
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Tawheed means singling out Allah in all that belongs only to Him.
              It means believing that He alone is the Creator, Sustainer,
              Provider, Lord, and Master over all things.
            </p>

            <p>
              It also means directing every act of worship to Him alone: salah,
              dua, hope, fear, sacrifice, trust, reliance, repentance, and love.
              No one deserves what belongs to Allah.
            </p>

            <p>
              A person can say they believe in Allah, but Tawheed becomes real
              when the heart turns to Him first, depends on Him first, and seeks
              nearness to Him above all else.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
              What weakens Tawheed
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-[#5e6558]">
              {weakensTawheed.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
              What strengthens Tawheed
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-[#5e6558]">
              {strengthensTawheed.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How to practice Tawheed in daily life
          </p>

          <div className="mt-5 space-y-4 text-base leading-8 text-[#5e6558]">
            {dailyPractice.map((item) => (
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
            Surah Al-Ikhlas 112:1
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            قُلْ هُوَ ٱللَّهُ أَحَدٌ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Qul huwa Allāhu Aḥad
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            Say, He is Allah, the One.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            This is the heart of Tawheed in a single line: Allah is One, unique,
            unmatched, and alone deserving of worship.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            The more clearly a person knows Allah, the more sincerely they
            worship Him. And the more sincerely they worship Him, the more
            settled the heart becomes.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Tawheed is not only something to memorize. It is something to return
            to every day — in fear, in hope, in worship, in gratitude, and in
            the quiet choices of the heart.
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