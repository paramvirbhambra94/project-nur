import Link from "next/link";

const pillars = [
  {
    title: "Belief in Allah",
    subtitle: "The root of all belief",
    description:
      "To believe in Allah is to know that He is your Lord, Creator, Sustainer, and the only One worthy of worship. Every other pillar grows from this first and greatest truth.",
  },
  {
    title: "Belief in the Angels",
    subtitle: "The unseen servants of Allah",
    description:
      "The angels are noble creation who obey Allah perfectly. They carry revelation, record deeds, protect by Allah’s permission, and remind the believer that the unseen world is real.",
  },
  {
    title: "Belief in the Books",
    subtitle: "Guidance sent down",
    description:
      "Allah sent revealed books as mercy and guidance. The believer honors all revelation, and holds firmly to the Quran as the final, preserved guidance for mankind.",
  },
  {
    title: "Belief in the Messengers",
    subtitle: "Those sent to call to truth",
    description:
      "Allah sent messengers to guide humanity back to worshipping Him alone. We believe in them all, honor them, and follow Prophet Muhammad ﷺ as the final messenger.",
  },
  {
    title: "Belief in the Last Day",
    subtitle: "The return and the reckoning",
    description:
      "The believer knows this life is not the end. There will be resurrection, judgment, reward, and accountability. This gives weight to choices and hope to hardship.",
  },
  {
    title: "Belief in Divine Decree",
    subtitle: "Trusting Allah’s perfect wisdom",
    description:
      "Allah knows, wills, writes, and creates all things with perfect wisdom. Belief in qadr teaches humility, patience, trust, and peace in what we cannot control.",
  },
];

const dailyLife = [
  "Strengthen belief by remembering that Allah sees you, hears you, and knows your state even when no one else does.",
  "Live with awareness that your deeds are recorded and that your choices matter.",
  "Return to the Quran often so faith is fed by revelation, not only by emotions.",
  "Learn from the examples of the prophets when you feel weak, confused, or tested.",
  "Remember the Last Day when choosing between what is easy now and what is right with Allah.",
  "Meet hardship with trust in Allah’s decree while still taking the means and making dua.",
];

const heartQuestions = [
  "Do I remember Allah mostly in hardship, or also in ease?",
  "Do I live like the unseen is real, or only like this world is real?",
  "Does the Quran guide my life, or do I leave it closed most days?",
  "When I face hardship, do I trust Allah’s wisdom or only focus on what I cannot understand?",
  "How often do I remember that I will stand before Allah?",
];

export default function SixPillarsOfImanPage() {
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
            The Six Pillars of Iman
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            The unseen beliefs that anchor the believer.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Iman is not only spoken. It lives in the heart, shapes the way a
            person sees life, and steadies them in worship, hardship, hope, and
            return. These six pillars are the roots beneath a believer’s life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “The Messenger has believed in what was revealed to him from his Lord, and so have the believers…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-Baqarah 2:285
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Iman gives the believer an inner world shaped by truth. It teaches
            the heart what to trust, what to hope for, what to fear, and what to
            live toward.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                {pillar.subtitle}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{pillar.title}</h2>
              <p className="mt-4 text-base leading-8 text-[#5e6558]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Why iman matters
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Without iman, life can become shallow, reactive, and tied only to
              what is immediately seen. With iman, the believer lives with
              meaning beyond the visible world.
            </p>

            <p>
              Iman teaches that Allah is near, the angels are real, revelation
              guides, the messengers were truthful, the Last Day is coming, and
              Allah’s decree is never without wisdom.
            </p>

            <p>
              These beliefs do not only inform the mind. They steady the heart,
              correct the direction, and make a person more sincere in how they
              worship and how they live.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How iman shows up in daily life
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
            Surah Al-Baqarah 2:285
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Āmana ar-rasūlu bimā unzila ilayhi min rabbihi wal-mu’minūn
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            The Messenger has believed in what was revealed to him from his
            Lord, and so have the believers.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Iman is not a label. It is a believing heart that receives what
            Allah revealed with trust, surrender, and sincerity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            The Six Pillars of Iman teach the believer how to see life
            correctly: through faith in Allah, trust in revelation, awareness of
            the unseen, and certainty that the return to Him is real.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The stronger iman becomes, the steadier the heart becomes — in ease,
            in hardship, in worship, and in the quiet moments when only Allah
            sees.
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
