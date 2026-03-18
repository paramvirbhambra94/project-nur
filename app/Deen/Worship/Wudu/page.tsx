import Link from "next/link";

const steps = [
  "Make the intention in your heart to perform wudu for Allah.",
  "Say: Bismillah.",
  "Wash both hands up to the wrists three times.",
  "Rinse the mouth three times.",
  "Rinse the nose and gently blow the water out three times.",
  "Wash the face three times.",
  "Wash the right arm including the elbow three times, then the left.",
  "Wipe the head once.",
  "Wipe the ears once.",
  "Wash the right foot including the ankle three times, then the left.",
];

export default function WuduPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,122,90,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(176,141,87,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Link
            href="/Deen/Worship"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Worship
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Wudu
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A simple step-by-step guide to ablution before prayer.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Wudu is a beautiful preparation for salah. It cleans the body and
            helps the heart arrive at prayer with care and readiness.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Step {index + 1}
              </p>

              <p className="mt-3 text-base leading-8 text-[#5e6558]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Gentle note
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            Learn the steps slowly and keep practicing. Worship becomes easier
            with repetition, and Allah sees the effort of the one trying to
            return to Him properly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/Deen/Worship"
              className="rounded-full bg-[#4f7a5a] px-6 py-3 text-sm font-semibold text-[#f7f2e8]"
            >
              Back to Worship
            </Link>

            <Link
              href="/Deen"
              className="rounded-full border border-[#d9cfbc] bg-white px-6 py-3 text-sm font-semibold text-[#4f7a5a]"
            >
              Return to Deen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
