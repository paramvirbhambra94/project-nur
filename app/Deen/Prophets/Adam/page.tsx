import Link from "next/link";

const lessons = [
  {
    title: "Human beings are honored",
    text: "Allah created Adam with care, taught him, and honored him. The story begins with dignity, not worthlessness.",
  },
  {
    title: "Human beings can slip",
    text: "Adam made a mistake, and that teaches us something essential: being human includes weakness, but weakness is not the end of the story.",
  },
  {
    title: "The door of return is open",
    text: "Adam turned back to Allah, and Allah accepted him. The beginning of the human story is not despair. It is repentance and mercy.",
  },
];

const dailyLife = [
  "When you make a mistake, do not let shame pull you farther away from Allah. Return quickly.",
  "Remember that your value comes from being a servant of Allah, not from worldly approval.",
  "Treat knowledge as an honor and trust, because Adam was taught by Allah.",
  "Do not let one fall define your whole relationship with Allah.",
  "Let repentance become part of your life, not just something you think about after major mistakes.",
];

const heartQuestions = [
  "When I slip, do I run back to Allah or hide from Him in shame?",
  "Do I remember that Allah created me with dignity and purpose?",
  "Have I started to let mistakes define me more than Allah’s mercy does?",
  "Do I seek beneficial knowledge with gratitude and humility?",
  "What would sincere return to Allah look like for me right now?",
];

export default function AdamPage() {
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
            Adam
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            The first beginning, the first guidance, and the first return to Allah.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Adam is the beginning of the human story in Islam. His life teaches
            creation, honor, knowledge, temptation, mistake, repentance, and the
            mercy of Allah. It is a story that sets the tone for all who come
            after him.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Then Adam received words from his Lord, and He accepted his repentance.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-Baqarah 2:37
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            The human story begins with a lesson that every believer needs:
            mistakes can happen, but Allah teaches the way back. Repentance is
            not a side note in the story of humanity — it is near the very
            beginning.
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
            The story of Adam
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Allah created Adam as the first human and honored him with
              knowledge. He taught him, gave him a station of dignity, and made
              him the beginning of humanity.
            </p>

            <p>
              Adam and Hawwa were placed in the garden, where they were tested.
              Shaytan deceived them, and Adam slipped by approaching what Allah
              had forbidden.
            </p>

            <p>
              But the story does not end at the mistake. Adam turned back to
              Allah, received words from Him, and Allah accepted his repentance.
              This is one of the gentlest beginnings a believer can reflect on:
              Allah is the One who teaches the way back.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Adam’s story lives in daily life
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
            Surah Al-Baqarah 2:37
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            فَتَلَقَّىٰٓ ءَادَمُ مِن رَّبِّهِۦ كَلِمَـٰتٍ فَتَابَ عَلَيْهِ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Fatalaqqā Ādamu mir rabbihi kalimātin fatāba ‘alayh
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            Then Adam received words from his Lord, and He accepted his repentance.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Adam’s story teaches that a fall does not have to become a final
            distance. Allah teaches the words of return to the one who turns
            back sincerely.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            The first prophetic story teaches one of the greatest truths: human
            beings are honored, they can slip, and they can return.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Adam teaches the believer not to live in despair after a mistake,
            but to live in sincere repentance, humility, and hope in Allah’s
            mercy.
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
