import Link from "next/link";

const worshipSections = [
  {
    title: "Salah Rakats",
    subtitle: "Know each prayer clearly",
    description:
      "A simple guide to the daily prayers and how many rakats belong to each one, including sunnah and fard categories.",
    href: "/Deen/Worship/Salah-Rakats",
    clickable: true,
  },
  {
    title: "Wudu",
    subtitle: "Prepare for prayer with care",
    description:
      "Learn how to perform ablution step by step in a clear and gentle way that feels easy to follow.",
    href: "/Deen/Worship/Wudu",
    clickable: true,
  },
  {
    title: "Dhikr & Dua",
    subtitle: "Keep the heart remembering",
    description:
      "A calm page of daily remembrance and supplications to help the heart stay soft, present, and connected to Allah.",
    href: "/Deen/Worship/Dhikr-Dua",
    clickable: true,
  },
  {
    title: "How to Pray",
    subtitle: "Step-by-step salah",
    description:
      "A full beginner-friendly guide to the actions and words of prayer.",
    href: "#",
    clickable: false,
  },
];

export default function WorshipPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,122,90,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(176,141,87,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Link
            href="/Deen"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Deen
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Worship
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Learn the acts of worship that shape a Muslim’s daily life.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Worship is where belief becomes movement, remembrance, discipline,
            and nearness to Allah. This section is built to make the essentials
            feel clear, calm, and easy to return to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Begin with clarity
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            For many people, worship feels heavy only because it feels unclear.
            Once the basics are explained simply, the heart settles and the path
            becomes easier to walk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {worshipSections.map((item) =>
            item.clickable ? (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6 transition hover:bg-[#fcf6ec]"
              >
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                      {item.subtitle}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>

                    <p className="mt-4 text-base leading-8 text-[#5e6558]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 md:mt-1">
                    <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                      Open
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
              >
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                      {item.subtitle}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>

                    <p className="mt-4 text-base leading-8 text-[#5e6558]">
                      {item.description}
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
