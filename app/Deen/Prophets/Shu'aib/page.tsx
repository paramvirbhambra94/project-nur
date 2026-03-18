import Link from "next/link";

const lessons = [
  {
    title: "Honesty is part of deen",
    text: "Shu’aib teaches that worship is not separated from business, speech, and everyday dealings. Integrity is part of faith.",
  },
  {
    title: "Justice matters in ordinary life",
    text: "People often think corruption is only in huge matters, but Shu’aib’s story reminds us that small dishonesty also harms the soul and society.",
  },
  {
    title: "Faith should shape transactions",
    text: "A believer should carry taqwa into buying, selling, promises, and all dealings with people.",
  },
];

const dailyLife = [
  "Be truthful in money, promises, and everyday responsibilities.",
  "Do not think small dishonesty is harmless just because it is common.",
  "Let your deen shape how you deal with people, not just how you pray.",
  "Avoid cheating, manipulation, and unfair advantage in any form.",
  "Ask Allah to make your private and public dealings clean and upright.",
];

const heartQuestions = [
  "Am I honest in the parts of life people may never check closely?",
  "Do I separate religion from my work, money, or responsibilities?",
  "Have I normalized small dishonesty because others do it too?",
  "Would the people around me describe me as fair and trustworthy?",
  "What needs to become more truthful in my daily dealings?",
];

export default function ShuaibPage() {
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
            Shu’aib
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet who called his people to honesty, fairness, and clean dealings.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Shu’aib teaches the believer that deen is not only in prayer and
            reflection. It must also appear in fairness, business, speech,
            trustworthiness, and how we deal with people every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Give full measure and weight in justice…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Quranic reminder
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Shu’aib’s story teaches that faith must enter daily dealings. A
            truthful heart does not cheat people while claiming to worship Allah.
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
            The story of Shu’aib
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Shu’aib was sent to a people whose corruption showed in their
              dealings. They were not only called to worship Allah alone, but
              also to become honest, fair, and upright with one another.
            </p>

            <p>
              His story shows that wrongdoing is not only found in belief. It
              can also appear in transactions, manipulation, and taking from
              people unfairly. Shu’aib called them to justice in both faith and
              conduct.
            </p>

            <p>
              He teaches the believer that taqwa must shape everyday life. Clean
              worship and dirty dealings do not belong together.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Shu’aib lives in daily life
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

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Shu’aib teaches that honesty is part of worship.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer should carry truthfulness into money, promises,
            responsibilities, and every dealing — because deen is meant to shape
            the whole life.
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
