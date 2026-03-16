import Link from "next/link";

const pillars = [
  {
    title: "Shahadah",
    subtitle: "The testimony that begins everything",
    description:
      "To bear witness that there is no god worthy of worship except Allah, and that Muhammad ﷺ is the Messenger of Allah. This is the doorway into Islam and the foundation of a believer’s life.",
  },
  {
    title: "Salah",
    subtitle: "The daily meeting with Allah",
    description:
      "Prayer is not only an obligation. It is protection, discipline, purification, and a return to Allah throughout the day.",
  },
  {
    title: "Zakah",
    subtitle: "Purifying wealth and the heart",
    description:
      "Zakah teaches that wealth is a trust from Allah. Giving purifies greed, softens the heart, and strengthens care for others.",
  },
  {
    title: "Fasting",
    subtitle: "Training the soul",
    description:
      "Fasting teaches restraint, sincerity, gratitude, patience, and awareness of Allah in what is seen and unseen.",
  },
  {
    title: "Hajj",
    subtitle: "A journey of submission",
    description:
      "Hajj gathers humility, sacrifice, remembrance, and unity in one great act of worship for those able to undertake it.",
  },
];

const dailyLife = [
  "Renew your shahadah in your heart by remembering who you belong to and who you live for.",
  "Guard your prayers and let them anchor your day instead of treating them as interruptions.",
  "Be generous and let your money serve obedience, not ego.",
  "Practice restraint in private, not just in public.",
  "Keep the spirit of Hajj alive by living with humility, repentance, and awareness of the bigger journey to Allah.",
];

export default function FivePillarsPage() {
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
            The Five Pillars
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            The structure that holds a Muslim upright.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            The Five Pillars are not a dry list. They are the outward framework
            of a life built in obedience, remembrance, discipline, and devotion
            to Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Islam is built upon five…”
          </blockquote>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            A building stands because it has support. In the same way, a Muslim
            life stands firm through pillars that shape the body, discipline the
            soul, and draw the servant back to Allah again and again.
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
            Why the pillars matter
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              The pillars give Islam form in daily life. Without them, belief
              becomes something a person claims but does not steadily live.
            </p>

            <p>
              Through them, the body worships, the tongue remembers, the wealth
              is purified, the ego is restrained, and the heart learns to submit.
            </p>

            <p>
              They are not random duties. They are repeated acts of alignment
              that keep a Muslim connected to Allah over a lifetime.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How to live the pillars daily
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
            A verse to carry with you
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-Baqarah 2:21
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            يَـٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Yā ayyuhan-nāsuʿbudū Rabbakum
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            O mankind, worship your Lord…
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The pillars are all forms of this call: worship your Lord with the
            heart, the body, the wealth, and the life He gave you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            The pillars are not there to burden the believer. They are there to
            hold the believer upright, soften the heart, and keep the soul tied
            to Allah.
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