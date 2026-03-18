import Link from "next/link";

const prayers = [
  {
    name: "Fajr",
    time: "Dawn prayer",
    fard: "2 fard",
    sunnah: "2 sunnah before",
  },
  {
    name: "Dhuhr",
    time: "Midday prayer",
    fard: "4 fard",
    sunnah: "4 sunnah before, 2 sunnah after",
  },
  {
    name: "Asr",
    time: "Afternoon prayer",
    fard: "4 fard",
    sunnah: "Optional sunnah before",
  },
  {
    name: "Maghrib",
    time: "Sunset prayer",
    fard: "3 fard",
    sunnah: "2 sunnah after",
  },
  {
    name: "Isha",
    time: "Night prayer",
    fard: "4 fard",
    sunnah: "2 sunnah after, then witr",
  },
];

export default function SalahRakatsPage() {
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
            Salah Rakats
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A clear guide to the daily prayers and their rakats.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            This page is here to make the daily prayers feel easier to remember.
            Keep returning to it until the structure becomes familiar and calm.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="space-y-4">
          {prayers.map((prayer) => (
            <div
              key={prayer.name}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                {prayer.time}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">{prayer.name}</h2>

              <div className="mt-4 space-y-2 text-base leading-8 text-[#5e6558]">
                <p>
                  <span className="font-semibold text-[#2f3a2f]">Fard:</span>{" "}
                  {prayer.fard}
                </p>
                <p>
                  <span className="font-semibold text-[#2f3a2f]">Sunnah:</span>{" "}
                  {prayer.sunnah}
                </p>
              </div>
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
            The most important thing is to learn steadily and keep praying.
            Clarity grows with practice, and Allah loves the servant who keeps
            returning to Him.
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
