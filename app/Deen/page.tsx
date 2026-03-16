import Link from "next/link";

const paths = [
  {
    title: "Foundations",
    subtitle: "Begin with the essentials",
    description:
      "Start with the pillars of Islam, pillars of iman, tawheed, purpose, akhirah, and the core beliefs that steady the heart.",
    href: "/Deen/Foundations",
    clickable: true,
  },
  {
    title: "Prophets",
    subtitle: "Lessons from the chosen",
    description:
      "Learn from the lives, trials, patience, trust, and wisdom of the prophets in a way that strengthens faith and perspective.",
    href: "#",
    clickable: false,
  },
  {
    title: "Quran Basics",
    subtitle: "Understand the book you read",
    description:
      "Discover what the Quran is, how it was revealed, how it is structured, and why it remains the center of a believer’s life.",
    href: "#",
    clickable: false,
  },
  {
    title: "Worship",
    subtitle: "Live Islam with intention",
    description:
      "Explore salah, wudu, fasting, duas, adhkar, zakah, and acts of worship through simple and beginner-friendly guidance.",
    href: "#",
    clickable: false,
  },
  {
    title: "Character",
    subtitle: "Refine the heart",
    description:
      "Grow in sincerity, patience, gratitude, mercy, humility, honesty, and the beautiful manners beloved to Allah.",
    href: "#",
    clickable: false,
  },
  {
    title: "Seerah",
    subtitle: "Walk through the Prophet’s life",
    description:
      "Journey through the life, character, struggle, and mercy of Prophet Muhammad ﷺ in a way that builds love and connection.",
    href: "#",
    clickable: false,
  },
];

export default function DeenPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Deen
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A place to learn Islam with softness, clarity, and steadiness.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Deen in Project Nur is not meant to feel heavy or crowded. It is a
            gentle space to return to the essentials, strengthen understanding,
            and keep the heart connected to what truly matters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Start here
          </p>

          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            If you are unsure where to begin, begin with the foundations.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5e6558]">
            The strongest starting point is always the essentials: belief,
            worship, purpose, and the basics that help a Muslim stand on firm
            ground. Build from there, slowly and sincerely.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/Deen/Foundations"
              className="rounded-full bg-[#4f7a5a] px-6 py-3 text-sm font-semibold text-[#f7f2e8]"
            >
              Begin Foundations
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

      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Reminder
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “So know that there is no god worthy of worship except Allah…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Muhammad 47:19
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Real learning in deen is not just collecting information. It is
            learning what brings a person nearer to Allah, steadier in worship,
            and softer in heart.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {paths.map((path) =>
            path.clickable ? (
              <div
                key={path.title}
                className="relative rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] transition hover:bg-[#fcf6ec]"
              >
                <Link
                  href={path.href}
                  className="absolute inset-0 z-10 rounded-[28px]"
                  aria-label={`Open ${path.title}`}
                />
                <div className="relative z-0 p-6">
                  <div className="md:flex md:items-start md:justify-between md:gap-8">
                    <div className="max-w-3xl">
                      <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                        {path.subtitle}
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold">{path.title}</h3>

                      <p className="mt-4 text-base leading-8 text-[#5e6558]">
                        {path.description}
                      </p>
                    </div>

                    <div className="mt-5 md:mt-1">
                      <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                        Enter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={path.title}
                className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
              >
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                      {path.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">{path.title}</h3>

                    <p className="mt-4 text-base leading-8 text-[#5e6558]">
                      {path.description}
                    </p>
                  </div>

                  <div className="mt-5 md:mt-1">
                    <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                      Soon
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}