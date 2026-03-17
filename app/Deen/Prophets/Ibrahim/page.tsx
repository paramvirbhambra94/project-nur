import Link from "next/link";

const lessons = [
  {
    title: "Tawheed must stand above everything",
    text: "Ibrahim’s life is one of the clearest calls to worship Allah alone. He teaches that truth is worth standing for, even when surrounded by falsehood.",
  },
  {
    title: "Trust Allah completely",
    text: "Ibrahim’s story is filled with trust: in hardship, in migration, in sacrifice, and in every command from Allah. His life teaches surrender with confidence in Allah’s wisdom.",
  },
  {
    title: "Surrender is the path of closeness",
    text: "Ibrahim was not remembered only for knowing truth, but for living it fully. The path to Allah is not only belief in the heart, but surrender in the life.",
  },
];

const dailyLife = [
  "Put Allah first even when that choice feels difficult or lonely.",
  "Do not bend truth to fit the people around you.",
  "Let trust in Allah become stronger than fear of outcomes.",
  "When Allah’s command is clear, move toward obedience with sincerity.",
  "Build your life around tawheed, not around approval from others.",
];

const heartQuestions = [
  "What do I still fear losing more than I fear displeasing Allah?",
  "Do I truly trust Allah when obedience costs me something?",
  "Is tawheed the center of my life or only one part of it?",
  "Where do I still compromise truth to feel accepted?",
  "What would fuller surrender to Allah look like for me now?",
];

export default function IbrahimPage() {
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
            Ibrahim
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of tawheed, surrender, trust, and nearness to Allah.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Ibrahim is one of the great models of faith in Islam. His story is a
            story of standing for tawheed, breaking falsehood, trusting Allah in
            hardship, and surrendering completely to what Allah loves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “When his Lord said to him, Submit, he said, I have submitted to the Lord of the worlds.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-Baqarah 2:131
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This is the heart of Ibrahim’s life: surrender. Not partial
            surrender, not delayed surrender, but a heart that turns fully to
            Allah with trust, obedience, and love.
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
            The story of Ibrahim
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Ibrahim lived among people attached to false worship. He spoke
              against idols, called to Allah alone, and stood for truth even
              when it brought opposition from his own people.
            </p>

            <p>
              His life was marked by trust in Allah: in leaving his home, in
              enduring trial, in building the Ka‘bah, and in responding to
              commands that demanded complete surrender.
            </p>

            <p>
              Ibrahim teaches that faith is not merely knowing what is true. It
              is living by it. It is letting tawheed shape decisions, loyalties,
              sacrifices, and the whole direction of one’s life.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Ibrahim lives in daily life
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
            Surah Al-Baqarah 2:131
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            إِذْ قَالَ لَهُۥ رَبُّهُۥٓ أَسْلِمْ ۖ قَالَ أَسْلَمْتُ لِرَبِّ ٱلْعَـٰلَمِينَ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Idh qāla lahu rabbuhu aslim, qāla aslamtu lirabbil-‘ālamīn
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            When his Lord said to him, Submit, he said, I have submitted to the
            Lord of the worlds.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Ibrahim’s greatness was not only in what he knew, but in how fully
            he surrendered to Allah. That is the path of closeness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Ibrahim teaches that tawheed is not only believed — it is lived.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer who wants nearness to Allah must learn from Ibrahim:
            trust deeply, stand for truth, and surrender fully to the Lord of
            the worlds.
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
