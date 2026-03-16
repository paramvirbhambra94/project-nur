import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const projectNurFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sections = [
  {
    title: "Quran",
    description:
      "Read with Arabic, Roman transliteration, and a calm layout designed for closeness and clarity.",
    href: "/Quran",
  },
  {
    title: "Deen",
    description:
      "Learn through foundations, prophets, worship, seerah, character, and gentle guided study.",
    href: "/Deen",
  },
  {
    title: "Explore",
    description:
      "Browse reminders, reflections, and themes that help the heart stay connected.",
    href: "/Explore",
  },
  {
    title: "Ask Nur",
    description:
      "Ask simple questions and receive beginner-friendly Islamic explanations.",
    href: "/Ask-Nur",
  },
  {
    title: "My Nur",
    description:
      "Return to your journey, saved progress, bookmarks, and personal space.",
    href: "/My-Nur",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.10),_transparent_25%),radial-gradient(circle_at_center,_rgba(79,122,90,0.08),_transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-[#b08d57]">
              A calm beginning
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 md:gap-6">
              <div className="relative h-40 w-40 shrink-0 md:h-72 md:w-72">
                <Image
                  src="/logo-symbol.png"
                  alt="Project Nur logo symbol"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h1
                className={`${projectNurFont.className} text-center text-5xl font-bold leading-[0.95] text-[#3f6b4c] md:text-[7rem]`}
              >
                Project Nur
              </h1>

              <div className="relative h-40 w-40 shrink-0 md:h-72 md:w-72">
                <Image
                  src="/logo-symbol.png"
                  alt="Project Nur logo symbol"
                  fill
                  className="object-contain scale-x-[-1]"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 text-center text-lg tracking-[0.28em] text-[#b08d57] md:text-xl">
              نُور
            </p>

            <div className="mx-auto mt-8 h-px w-28 bg-[#d8c39b]" />

            <h2 className="mx-auto mt-10 max-w-4xl text-center text-3xl font-semibold leading-tight md:text-5xl">
              A gentle place to read Quran,
              <span className="block text-[#4f7a5a]">
                learn deen, and return often.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-[#5e6558] md:text-lg">
              Built for people who want closeness to the Quran and Islam through
              a softer, simpler experience — one that feels welcoming, rooted,
              and easy to return to.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/Quran"
                className="rounded-full bg-[#4f7a5a] px-7 py-3.5 text-sm font-semibold text-[#f7f2e8]"
              >
                Enter Quran
              </Link>

              <Link
                href="/My-Nur"
                className="rounded-full border border-[#d9cfbc] bg-white px-7 py-3.5 text-sm font-semibold text-[#4f7a5a]"
              >
                Continue Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And We have certainly made the Quran easy for remembrance, so is
            there any who will remember?”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-Qamar 54:17
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Project Nur is built around this hope: that the path into Quran and
            deen can feel more open, more peaceful, and easier to return to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="block rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6 transition hover:bg-[#fcf6ec]"
            >
              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                    Section
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-[#5e6558]">
                    {section.description}
                  </p>
                </div>

                <div className="mt-5 md:mt-1">
                  <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                    Enter
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}