import Link from "next/link";

const foundations = [
  {
    title: "Tawheed",
    subtitle: "Know your Lord",
    description:
      "Begin where everything begins: knowing Allah, worshipping Him alone, and understanding that the heart finds rest only when it turns fully to Him.",
    href: "/Deen/Foundations/Tawheed",
    clickable: true,
  },
  {
    title: "The Five Pillars",
    subtitle: "The structure of Islam",
    description:
      "Learn the pillars that shape a Muslim’s outward life: shahadah, salah, zakah, fasting, and hajj — not as checklists, but as acts of devotion.",
    href: "/Deen/Foundations/Five-Pillars",
    clickable: true,
  },
  {
    title: "The Six Pillars of Iman",
    subtitle: "The unseen roots of belief",
    description:
      "Understand belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree — the unseen truths that anchor the believer.",
    href: "#",
    clickable: false,
  },
  {
    title: "Purpose",
    subtitle: "Why you were created",
    description:
      "Return to the question many hearts quietly carry: why am I here? Foundations should reconnect the soul to worship, servitude, and meaning.",
    href: "#",
    clickable: false,
  },
  {
    title: "Akhirah",
    subtitle: "Remember the return",
    description:
      "Reflect on death, accountability, mercy, hope, and the meeting with Allah — not to create fear alone, but to awaken sincerity and direction.",
    href: "#",
    clickable: false,
  },
  {
    title: "Repentance and Hope",
    subtitle: "Return is always open",
    description:
      "A person beginning deen should know this deeply: the door back to Allah is open, and no sincere return is small in the sight of the Most Merciful.",
    href: "#",
    clickable: false,
  },
];

export default function FoundationsPage() {
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
            Foundations
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            The place where a believer begins, returns, and stands firm.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Foundations are not dry information. They are the truths that steady
            the heart, correct the direction, and remind a person who Allah is,
            why they were created, and where they are returning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reminder
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Whoever Allah wills good for, He gives him understanding of the religion.”
          </blockquote>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Beginning with foundations is not a sign of weakness. It is a sign
            of sincerity. The one who wants to stand firm starts by making the
            ground beneath them firm.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
              Begin with calm
            </p>
            <p className="mt-4 text-base leading-8 text-[#5e6558]">
              You do not need to carry everything at once. Learn the essentials,
              let them settle in the heart, and grow from there.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
              Learn with sincerity
            </p>
            <p className="mt-4 text-base leading-8 text-[#5e6558]">
              The goal is not to collect facts. The goal is to become more
              truthful with Allah, more grounded in worship, and more awake to
              what matters.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {foundations.map((item) =>
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