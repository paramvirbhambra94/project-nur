import Link from "next/link";

const lessons = [
  {
    title: "Supporting truth is a noble role",
    text: "Harun teaches that not every righteous role is the front-facing one. Supporting, strengthening, and standing beside truth is deeply honorable.",
  },
  {
    title: "Gentleness can be part of strength",
    text: "Harun’s role alongside Musa reminds the believer that calm speech, support, and steadiness are also forms of prophetic strength.",
  },
  {
    title: "Brotherhood in deen matters",
    text: "Harun teaches the value of helping another believer carry responsibility, especially in difficult missions and heavy duties.",
  },
];

const dailyLife = [
  "Do not think only visible leadership is valuable in Allah’s sight.",
  "Support good work even when you are not the main person at the front.",
  "Use your words to strengthen truth, not weaken it.",
  "Be the kind of believer who helps others carry responsibility.",
  "Value sincerity in service more than being noticed by people.",
];

const heartQuestions = [
  "Do I only value roles where I am seen?",
  "Am I willing to support good sincerely without needing recognition?",
  "How do I use my words — to strengthen others or burden them?",
  "Who in my life needs faithful support right now?",
  "What would it look like for me to serve truth more quietly and sincerely?",
];

export default function HarunPage() {
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
            Harun
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of support, gentleness, brotherhood, and standing beside truth.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Harun teaches the believer that supporting a mission for Allah is a
            noble station. Not every role is at the front, and yet some of the
            most beautiful service is to strengthen truth quietly and sincerely.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And appoint for me a minister from my family — Harun, my brother.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Ta-Ha 20:29-30
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Harun’s place in the story of Musa teaches that righteous support is
            a gift. Some people are sent to carry the burden beside others, and
            that is a beautiful trust from Allah.
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
            The story of Harun
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Harun was the brother of Musa and a prophet chosen by Allah. He
              was given the noble role of standing beside Musa and supporting
              the mission of truth.
            </p>

            <p>
              His story teaches that service in deen is not measured only by how
              visible a person is. Some of the most honorable work is helping
              another person carry what Allah has entrusted to them.
            </p>

            <p>
              Harun reminds the believer that gentleness, support, and sincere
              companionship in righteousness are part of strength, not weakness.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Harun lives in daily life
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
            Harun teaches that supporting truth is itself a noble prophetic role.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer does not need to be the most visible person to be
            deeply valuable. Quiet support for what is right can carry immense
            weight with Allah.
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
