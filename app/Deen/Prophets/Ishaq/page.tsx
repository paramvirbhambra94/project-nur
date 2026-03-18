import Link from "next/link";

const lessons = [
  {
    title: "Allah continues blessings through generations",
    text: "Ishaq reminds the believer that Allah can continue guidance, goodness, and prophetic blessing through family lines and righteous legacy.",
  },
  {
    title: "A gift from Allah should deepen gratitude",
    text: "Ishaq was a blessed gift. His story teaches that blessings are not only to be enjoyed, but to be received with gratitude and responsibility.",
  },
  {
    title: "Legacy matters in deen",
    text: "Ishaq’s place in the prophetic line teaches that a believer should care about what kind of faith, values, and remembrance of Allah continue after them.",
  },
];

const dailyLife = [
  "Receive blessings with gratitude, not entitlement.",
  "Think beyond your own life and care about what good continues after you.",
  "Ask Allah to place barakah in your family and future generations.",
  "Treat children, teaching, and guidance as trusts from Allah.",
  "Let blessings make you softer, humbler, and more thankful.",
];

const heartQuestions = [
  "Do blessings make me more grateful or more comfortable?",
  "What kind of legacy am I building in my deen and character?",
  "Do I ask Allah to continue good through my family or efforts?",
  "Have I started to see blessings as things I deserve instead of gifts from Allah?",
  "What would deeper gratitude look like in my life?",
];

export default function IshaqPage() {
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
            Ishaq
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of blessing, gratitude, and continuation of righteous legacy.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Ishaq’s story reminds the believer that Allah gives blessings with
            wisdom and continues good through generations. His mention carries
            the meaning of gift, gratitude, and the beauty of righteous legacy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And We gave him Ishaq and Yaqub…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Quranic reminder
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Ishaq’s story is tied to gift, continuation, and mercy. Allah gives
            blessings in ways that teach the heart gratitude and responsibility.
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
            What we learn from Ishaq
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Ishaq was one of the blessed prophets in the family of Ibrahim. He
              represents the continuation of guidance and the mercy of Allah in
              carrying good forward through generations.
            </p>

            <p>
              His place in the prophetic line reminds the believer that blessings
              are not random. Allah places them with wisdom, and He can make a
              person or family a means for ongoing good.
            </p>

            <p>
              Ishaq teaches that gifts from Allah should not make the heart
              careless. They should make it more grateful, more humble, and more
              conscious of what legacy is being carried forward.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Ishaq lives in daily life
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
            Ishaq teaches that blessings are trusts, not reasons for heedlessness.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer receives Allah’s gifts with gratitude and thinks about
            what kind of goodness, guidance, and faith will continue after them.
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
