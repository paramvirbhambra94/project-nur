import Link from "next/link";

const lessons = [
  {
    title: "Truth is not changed by society",
    text: "Lut stood for what was right even when the people around him normalized what Allah had forbidden. His story teaches moral firmness.",
  },
  {
    title: "Purity requires courage",
    text: "It is not always easy to remain upright when corruption spreads, but Lut teaches that obedience to Allah is worth standing for even in lonely moments.",
  },
  {
    title: "A believer does not follow wrong to belong",
    text: "Lut’s life reminds the heart that belonging to truth is better than fitting into falsehood.",
  },
];

const dailyLife = [
  "Do not measure right and wrong by what society makes normal.",
  "Stay principled even when truth feels unpopular.",
  "Ask Allah to keep your heart pure when surrounding influences are corrupt.",
  "Do not trade obedience to Allah for acceptance from people.",
  "Remember that moral clarity is a mercy, even when it feels difficult.",
];

const heartQuestions = [
  "Do I let the people around me shape my sense of right and wrong more than Allah’s guidance does?",
  "Where am I tempted to compromise truth just to feel accepted?",
  "Do I still feel discomfort toward what displeases Allah, or have I become numb?",
  "When obedience feels lonely, do I remain firm?",
  "What would stronger moral courage look like in my life right now?",
];

export default function LutPage() {
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
            Lut
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A prophet of moral firmness who stood for truth even when society turned away.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Lut’s story teaches the believer that truth is not reshaped by the
            people around us. Allah’s guidance remains the measure, even when
            corruption becomes common and obedience feels lonely.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And Lut, when he said to his people…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Quranic reminder
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            The story of Lut is a story of standing firm when a people become
            deeply comfortable with wrongdoing. It teaches the heart not to let
            society become a greater authority than Allah.
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
            The story of Lut
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Lut was sent to a people who had become deeply immersed in
              corruption. He called them away from wrongdoing and back to what
              is pure, lawful, and pleasing to Allah.
            </p>

            <p>
              His people resisted the truth and did not want their way of life
              challenged. But Lut did not bend the message to make it easier for
              them to accept. He remained firm.
            </p>

            <p>
              His story teaches the believer that the truth remains the truth,
              even when many reject it. Moral clarity is a mercy, and standing
              for it is part of faith.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How Lut lives in daily life
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
            Lut teaches that truth does not change to keep people comfortable.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            The believer protects their heart by staying close to Allah’s
            guidance, even when obedience feels difficult and falsehood becomes
            common.
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
