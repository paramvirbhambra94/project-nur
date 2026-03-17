import Link from "next/link";

const lessons = [
  {
    title: "Patience over long years",
    text: "Nuh called his people for a very long time. His story teaches that faithfulness to Allah is not measured only by quick results.",
  },
  {
    title: "Keep calling to truth",
    text: "Even when people rejected, mocked, and turned away, Nuh did not abandon the message. Steadfastness in truth is itself a form of success.",
  },
  {
    title: "Rescue belongs to Allah",
    text: "When the flood came, salvation was not in power, numbers, or status. Rescue was with Allah alone.",
  },
];

const dailyLife = [
  "Do not stop doing what is right just because people do not respond quickly.",
  "Stay sincere in worship and reminders, even if you feel unseen.",
  "Measure success by faithfulness to Allah, not only by visible outcomes.",
  "Trust Allah when obedience feels lonely or when others mock what matters to you.",
  "Keep returning to patience, because much of the path to Allah requires long steadiness.",
];

const heartQuestions = [
  "Do I give up on good too quickly when results are slow?",
  "Am I more attached to being seen as successful than to being faithful to Allah?",
  "How do I respond when truth is mocked around me?",
  "Do I trust Allah’s rescue, even when the situation feels overwhelming?",
  "Where in my life right now do I need more patience like Nuh?",
];

export default function NuhPage() {
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
            Nuh
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of long patience, steadfast calling, and trust through rejection.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Nuh is one of the great prophets of endurance. His story is not only
            about the flood. It is about years of calling to Allah, remaining
            sincere through rejection, and trusting that deliverance belongs to
            Allah alone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Indeed, I invited my people night and day.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Nuh 71:5
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This is the sound of persistence. Nuh’s story teaches that patience
            in calling, patience in worship, and patience in truth are among the
            most beautiful forms of sincerity.
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
            The story of Nuh
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Nuh was sent to call his people away from false worship and back
              to Allah. He called them openly and privately, with patience and
              perseverance, over a very long time.
            </p>

            <p>
              But many of his people turned away, mocked him, and refused to
              listen. Even so, Nuh remained steady. He did not measure his duty
              by how quickly people changed. He remained faithful to the message
              Allah gave him.
            </p>

            <p>
              When Allah commanded him to build the ark, it became a sign of
              obedience and trust. Then came the flood, and Allah saved Nuh and
              those who believed. His story teaches that deliverance comes from
              Allah, even after long years of difficulty.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Nuh lives in daily life
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
            Surah Nuh 71:5
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            قَالَ رَبِّ إِنِّى دَعَوْتُ قَوْمِى لَيْلًۭا وَنَهَارًۭا
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Qāla rabbi innī da‘awtu qawmī laylan wa nahārā
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            He said, My Lord, indeed I invited my people night and day.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            This verse teaches a believer not to tire quickly in what is right.
            Steady calling, steady worship, and steady patience are beloved to
            Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Nuh teaches that long patience is not wasted patience.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer’s duty is to remain truthful, sincere, and steadfast.
            Results belong to Allah, and rescue belongs to Allah.
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
