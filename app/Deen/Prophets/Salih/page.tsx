import Link from "next/link";

const lessons = [
  {
    title: "Clear signs should soften the heart",
    text: "Salih’s people were shown a clear sign from Allah. His story teaches that signs are a mercy, but hearts can still reject if arrogance remains.",
  },
  {
    title: "Rebellion has consequences",
    text: "When people knowingly oppose Allah after clear guidance reaches them, they harm themselves before anyone else.",
  },
  {
    title: "Obedience is safer than defiance",
    text: "Salih called his people to respond to Allah with humility. His story teaches that peace lies in obedience, not in testing Allah’s limits.",
  },
];

const dailyLife = [
  "Do not ask for signs while ignoring the guidance you already have.",
  "Respond to Allah’s commands with humility, not resistance.",
  "When truth becomes clear, do not delay obedience out of stubbornness.",
  "Take warnings seriously before consequences arrive.",
  "Guard your heart from becoming hard after repeated reminders.",
];

const heartQuestions = [
  "Do I ask for more proof while neglecting what Allah has already shown me?",
  "When guidance becomes clear, do I submit or resist?",
  "Have repeated reminders softened me or made me numb?",
  "Do I treat sins lightly because consequences do not come immediately?",
  "What area of life is calling me to stop delaying obedience?",
];

export default function SalihPage() {
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
            Salih
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet whose people were given a clear sign, yet still turned away.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Salih was sent to the people of Thamud. His story teaches that clear
            truth is a mercy from Allah, but when hearts grow proud and
            stubborn, even clear signs may be rejected.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And to Thamud We sent their brother Salih…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-A‘raf 7:73
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Salih’s story reminds the believer that guidance is already a mercy.
            The wise heart does not keep resisting until it is too late. It
            softens and returns.
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
            The story of Salih
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Salih was sent to Thamud, a people known for skill, strength, and
              carving homes into mountains. Yet like others before them, they
              needed guidance more than they needed worldly brilliance.
            </p>

            <p>
              Allah gave them a clear sign, but many of them still rejected the
              truth and persisted in defiance. Salih warned them, but they chose
              rebellion over humility.
            </p>

            <p>
              His story teaches that a person may be intelligent, capable, and
              outwardly impressive, yet still ruin themselves if they reject
              Allah after truth becomes clear.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Salih lives in daily life
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
            Surah Al-A‘raf 7:73
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَـٰلِحًۭا
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Wa ilā Thamūda akhāhum Ṣāliḥā
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            And to Thamud We sent their brother Salih.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Salih’s story calls the believer to take guidance seriously, to stop
            resisting truth, and to choose humility before consequences arrive.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            Salih teaches that clear signs are a mercy, not something to test or resist.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The safer heart is the one that softens quickly, obeys sincerely,
            and does not delay response when Allah makes truth clear.
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
