import Link from "next/link";

const reminders = [
  {
    title: "No sin is bigger than Allah’s mercy",
    text: "A believer must never belittle sin, but must also never despair of Allah. However far a person has gone, the door of return remains open while life remains.",
  },
  {
    title: "Repentance is not weakness",
    text: "Turning back to Allah is a sign of life in the heart. The one who repents is not disgraced with Allah; the one who refuses to return is the one in danger.",
  },
  {
    title: "Hope keeps the heart moving",
    text: "Hope in Allah protects the believer from giving up. It reminds them that Allah forgives, accepts, restores, and can change the state of a heart in a single sincere return.",
  },
];

const dailyLife = [
  "Do not delay repentance when you slip. Return quickly before the heart grows harder.",
  "When you make a mistake, speak to Allah honestly instead of hiding behind excuses.",
  "Pair repentance with action: leave the sin, regret it, ask forgiveness, and try to replace it with something good.",
  "Keep hope alive even after repeated weakness. A sincere return to Allah is never wasted.",
  "Remember that Allah loves those who turn back to Him often, not only those who never slip.",
];

const heartQuestions = [
  "Have I started to think my sins place me beyond Allah’s mercy?",
  "Do I postpone repentance as though I am promised more time?",
  "When I fall, do I run back to Allah or drift farther away in shame?",
  "Do I know Allah as the One who forgives and welcomes the repentant?",
  "What sin, habit, or distance from Allah do I need to bring back to Him now?",
];

export default function RepentanceAndHopePage() {
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
            Repentance and Hope
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Return to Allah. The door is still open.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            One of Shaytan’s heaviest tricks is to make a person sin, then make
            them believe there is no way back. Islam breaks that lie. Repentance
            is open, mercy is vast, and hope in Allah is part of the path.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “O My servants who have transgressed against themselves, do not despair of the mercy of Allah.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Az-Zumar 39:53
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This is one of the gentlest calls in the Quran. It does not deny sin.
            It does not excuse wrong. But it calls the sinner back with mercy,
            and teaches the heart never to close the door that Allah Himself has
            left open.
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
            What repentance really is
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Repentance is not only saying sorry. It is turning the heart back
              to Allah with regret, humility, sincerity, and a desire to leave
              what displeases Him.
            </p>

            <p>
              True tawbah means recognizing the wrong, feeling regret for it,
              stopping it, asking Allah for forgiveness, and sincerely intending
              not to return to it.
            </p>

            <p>
              Hope completes repentance. Without hope, a person may drown in
              shame. With hope, the believer returns knowing that Allah forgives,
              accepts, and loves those who turn back often.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            How to live with repentance and hope
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
            Surah Az-Zumar 39:53
          </p>

          <p className="mt-6 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
            قُلْ يَـٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ
          </p>

          <p className="mt-6 text-lg italic leading-8 text-[#5e6558]">
            Qul yā ‘ibādiya alladhīna asrafū ‘alā anfusihim lā taqnaṭū min raḥmatillāh
          </p>

          <p className="mt-4 text-base leading-8 text-[#5e6558]">
            Say, O My servants who have transgressed against themselves, do not
            despair of the mercy of Allah.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            This verse is a lifeline for the heart. However far a person has
            gone, despair is not the answer. The answer is to return.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Takeaway
          </p>

          <p className="mt-5 text-lg leading-9 text-[#5e6558]">
            The one who returns to Allah has not failed. The one who keeps
            returning is walking the path.
          </p>

          <p className="mt-5 text-base leading-8 text-[#5e6558]">
            Repentance softens the heart, and hope keeps it moving. Together,
            they protect the believer from despair and keep the soul tied to the
            mercy of Allah.
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
