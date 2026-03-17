import Link from "next/link";

const lessons = [
  {
    title: "Strength does not make a people safe",
    text: "Hud was sent to a people known for power and might. His story teaches that worldly strength cannot protect a people who become arrogant before Allah.",
  },
  {
    title: "Arrogance blinds the heart",
    text: "When people admire their own power too deeply, they can begin to forget their need for Allah. Hud called his people back to humility and truth.",
  },
  {
    title: "Truth stands even when rejected",
    text: "Hud remained firm in his message even when his people denied him. A believer learns not to measure truth by how popular it is.",
  },
];

const dailyLife = [
  "Do not let confidence in yourself become forgetfulness of Allah.",
  "When success comes, let it make you more grateful, not more arrogant.",
  "Do not assume power, popularity, or strength means Allah is pleased.",
  "Stand by truth even when people around you dismiss it.",
  "Ask Allah to protect your heart from pride and self-deception.",
];

const heartQuestions = [
  "Has anything in my life made me feel self-sufficient instead of dependent on Allah?",
  "Do I become more humble when blessed, or more proud?",
  "Do I confuse worldly strength with true nearness to Allah?",
  "How do I respond when truth challenges my ego?",
  "What would deeper humility before Allah look like in my daily life?",
];

export default function HudPage() {
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
            Hud
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet who warned against arrogance and called his people back to humility before Allah.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Hud was sent to the people of ‘Ad, a people of strength, stature,
            and worldly power. His story teaches that no people are too mighty
            to need Allah, and no strength can replace humility before Him.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And to ‘Ad We sent their brother Hud…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-A‘raf 7:65
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            The prophets came to bring people back to Allah. Hud’s story reminds
            the believer that one of the greatest diseases of the heart is
            arrogance, especially when it grows from power and pride.
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
            The story of Hud
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Hud was sent to the people of ‘Ad, who were known for their
              strength and impressive worldly might. But with that strength came
              pride, and with pride came distance from Allah.
            </p>

            <p>
              He called them to worship Allah alone and leave arrogance behind.
              Yet many of them rejected his message and trusted in their own
              power more than they trusted in the warning of Allah.
            </p>

            <p>
              Hud’s story teaches that human strength, success, and reputation
              are fragile when the heart turns away from Allah. Real security is
              only with Him.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Hud lives in daily life
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
            Surah Al-A‘raf 7:65
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًۭا
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Wa ilā ‘Ādin akhāhum Hūdā
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            And to ‘Ad We sent their brother Hud.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Hud’s story reminds the believer that every people, however strong,
            remain in need of Allah’s guidance and mercy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Hud teaches that pride is a dangerous veil over the heart.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer remains safe not through power, but through humility,
            obedience, and knowing their need for Allah at all times.
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
