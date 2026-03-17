import Link from "next/link";

const reminders = [
  {
    title: "This life is not the final home",
    text: "Dunya passes quickly. Its joys fade, its pain changes, and its moments do not remain. The believer lives here, but does not mistake it for the final destination.",
  },
  {
    title: "You will return to Allah",
    text: "Akhirah brings seriousness to life. It reminds the heart that every soul will stand before Allah, and that no deed, intention, or moment is lost.",
  },
  {
    title: "Akhirah brings both fear and hope",
    text: "It softens the heart through accountability, but it also fills it with hope in Allah’s mercy, forgiveness, reward, and justice.",
  },
];

const dailyLife = [
  "Remember death without becoming gloomy, so the heart stays awake and the priorities stay clear.",
  "Let the Last Day shape your choices when you are tempted, distracted, or about to wrong someone.",
  "Make repentance quickly, because the return to Allah can come sooner than expected.",
  "Do good deeds quietly and consistently, trusting that nothing with Allah is wasted.",
  "When dunya feels overwhelming, remember that this life is a passage and not the final place of rest.",
];

const heartQuestions = [
  "How often do I remember that I will stand before Allah?",
  "What would I change first if I deeply remembered the Akhirah?",
  "Am I living like this world is my final home?",
  "Do I delay repentance as though I am guaranteed more time?",
  "Does remembrance of the next life make me more sincere, more careful, and more hopeful?",
];

export default function AkhirahPage() {
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
            Akhirah
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Remember the return, and let the heart wake up.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            The Akhirah is not meant to make the believer hopeless. It is meant
            to make them truthful. It reminds the heart that life is serious,
            time is short, deeds matter, and the return to Allah is certain.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “Every soul will taste death…”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Āl ‘Imrān 3:185
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This is one of the great truths that clears illusion. No one stays
            here forever. The wise heart lives with this remembrance, and lets
            it purify intention, action, and direction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-3">
          {reminders.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Reminder
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
            What Akhirah changes
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              When a person remembers the Akhirah, life stops feeling random.
              Actions gain weight. Sins become more serious. Good deeds become
              more precious.
            </p>

            <p>
              Akhirah teaches the believer not to be deceived by what shines in
              dunya. It reminds them that success is not only what is seen now,
              but what will remain with Allah.
            </p>

            <p>
              It also gives comfort. Injustice will not go unanswered. Loss is
              not the end. Pain is not forgotten. There is a meeting with Allah,
              a judgment in truth, and a home that does not end.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How to live with Akhirah in mind
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
            Surah Āl ‘Imrān 3:185
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            كُلُّ نَفْسٍ ذَآئِقَةُ ٱلْمَوْتِ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Kullu nafsin dhā’iqatul-mawt
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            Every soul will taste death.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            This verse wakes the heart gently but truthfully. Time is passing,
            the return is real, and the wise believer prepares to meet Allah
            with repentance, sincerity, and hope.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            The one who remembers the Akhirah begins to live more honestly.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Remembrance of the next life does not remove beauty from this world.
            It puts this world in its place, so the believer can move through it
            with sincerity, caution, patience, and hope in Allah.
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