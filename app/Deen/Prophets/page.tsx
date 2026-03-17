import Link from "next/link";

const prophets = [
  {
    name: "Adam",
    theme: "Beginning",
    mentions: 25,
    description:
      "The first human and the first prophet. His story begins the human journey with creation, guidance, repentance, and mercy.",
    href: "/Deen/Prophets/Adam",
    clickable: true,
  },
  {
    name: "Idris",
    theme: "Wisdom",
    mentions: 2,
    description:
      "A prophet associated with truthfulness, wisdom, patience, and elevation.",
    href: "/Deen/Prophets/Idris",
    clickable: true,
  },
  {
    name: "Nuh",
    theme: "Patience",
    mentions: 43,
    description:
      "A prophet of long patience, steadfast calling, and trust in Allah through rejection.",
    href: "/Deen/Prophets/Nuh",
    clickable: true,
  },
  {
    name: "Hud",
    theme: "Warning",
    mentions: 7,
    description:
      "A messenger sent to confront arrogance and remind his people of Allah.",
    href: "/Deen/Prophets/Hud",
    clickable: true,
  },
  {
    name: "Salih",
    theme: "Signs",
    mentions: 9,
    description:
      "A prophet whose people were given a clear sign, yet still turned away.",
    href: "/Deen/Prophets/Salih",
    clickable: true,
  },
  {
    name: "Ibrahim",
    theme: "Surrender",
    mentions: 69,
    description:
      "A leader in tawheed, trust, sacrifice, and complete surrender to Allah.",
    href: "/Deen/Prophets/Ibrahim",
    clickable: true,
  },
  {
    name: "Lut",
    theme: "Firmness",
    mentions: 27,
    description:
      "A prophet who stood for truth and purity even when society turned away.",
    href: "#",
    clickable: false,
  },
  {
    name: "Ismail",
    theme: "Obedience",
    mentions: 12,
    description:
      "A prophet remembered for trust, sacrifice, and willing submission.",
    href: "#",
    clickable: false,
  },
  {
    name: "Ishaq",
    theme: "Blessing",
    mentions: 17,
    description:
      "A prophet through whom Allah continued a blessed prophetic line.",
    href: "#",
    clickable: false,
  },
  {
    name: "Yaqub",
    theme: "Hope",
    mentions: 16,
    description:
      "A prophet of patience, grief, and beautiful hope in Allah.",
    href: "#",
    clickable: false,
  },
  {
    name: "Yusuf",
    theme: "Trust",
    mentions: 27,
    description:
      "A prophet whose life teaches beauty, restraint, patience, and Allah’s hidden wisdom.",
    href: "#",
    clickable: false,
  },
  {
    name: "Shu’aib",
    theme: "Justice",
    mentions: 11,
    description:
      "A messenger who called his people to honesty, fairness, and upright dealings.",
    href: "#",
    clickable: false,
  },
  {
    name: "Ayyub",
    theme: "Endurance",
    mentions: 4,
    description:
      "A prophet remembered for deep patience and steadfastness in suffering.",
    href: "#",
    clickable: false,
  },
  {
    name: "Musa",
    theme: "Courage",
    mentions: 136,
    description:
      "A prophet of struggle, leadership, dependence on Allah, and deliverance.",
    href: "#",
    clickable: false,
  },
  {
    name: "Harun",
    theme: "Support",
    mentions: 20,
    description:
      "A prophet who stood alongside Musa and supported the mission of truth.",
    href: "#",
    clickable: false,
  },
  {
    name: "Dawud",
    theme: "Devotion",
    mentions: 16,
    description:
      "A prophet-king remembered for worship, gratitude, and strength.",
    href: "#",
    clickable: false,
  },
  {
    name: "Sulaiman",
    theme: "Wisdom",
    mentions: 17,
    description:
      "A prophet of wisdom, authority, gratitude, and remarkable blessings.",
    href: "#",
    clickable: false,
  },
  {
    name: "Ilyas",
    theme: "Clarity",
    mentions: 4,
    description:
      "A prophet who stood against false worship and called to Allah alone.",
    href: "#",
    clickable: false,
  },
  {
    name: "Al-Yasa",
    theme: "Faithfulness",
    mentions: 2,
    description:
      "A prophet remembered among the righteous and steadfast servants of Allah.",
    href: "#",
    clickable: false,
  },
  {
    name: "Yunus",
    theme: "Return",
    mentions: 4,
    description:
      "A prophet whose story teaches repentance, humility, and rescue after turning back.",
    href: "#",
    clickable: false,
  },
  {
    name: "Dhul-Kifl",
    theme: "Steadfastness",
    mentions: 2,
    description:
      "A prophet associated with patience, righteousness, and perseverance.",
    href: "#",
    clickable: false,
  },
  {
    name: "Imran",
    theme: "Legacy",
    mentions: 3,
    description:
      "A righteous figure tied to a household of devotion, trust, and sacred responsibility.",
    href: "#",
    clickable: false,
  },
  {
    name: "Zakariya",
    theme: "Dua",
    mentions: 7,
    description:
      "A prophet whose story carries hope, prayer, and trust in Allah’s timing.",
    href: "#",
    clickable: false,
  },
  {
    name: "Yahya",
    theme: "Purity",
    mentions: 5,
    description:
      "A prophet known for sincerity, piety, and deep devotion to Allah.",
    href: "#",
    clickable: false,
  },
  {
    name: "Isa",
    theme: "Mercy",
    mentions: 25,
    description:
      "A prophet of truth, miracles, mercy, and calling people back to Allah.",
    href: "#",
    clickable: false,
  },
  {
    name: "Muhammad ﷺ",
    theme: "Completion",
    mentions: 4,
    description:
      "The final prophet, sent as a mercy to the worlds and the seal of prophethood.",
    href: "#",
    clickable: false,
  },
];

export default function ProphetsPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,122,90,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(176,141,87,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
          <Link
            href="/Deen"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Deen
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Prophets
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Walk through the lives of the prophets and learn from the people
            Allah chose to guide humanity.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            The prophets are not only figures from history. Their lives teach
            tawheed, patience, courage, sincerity, repentance, hope, mercy, and
            steadfastness. This section is a journey through guidance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Why the prophets matter
          </p>

          <div className="mt-5 space-y-5 text-base leading-8 text-[#5e6558]">
            <p>
              Allah did not leave humanity without guidance. He sent prophets to
              call people back to worshipping Him, living truthfully, and
              walking the straight path.
            </p>

            <p>
              Their stories are not meant to be read like distant history. They
              are reminders for the heart, mirrors for the soul, and signs of
              how to live through hardship, rejection, hope, trust, and return.
            </p>

            <p>
              Every prophet brought guidance. Every prophet taught people to
              turn to Allah. And every prophetic story carries lessons that
              still heal hearts today.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Begin the journey
          </p>

          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Start with Adam, the first prophet and the first beginning.
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5e6558]">
            The prophetic journey begins with Adam: creation, honor, a mistake,
            repentance, and Allah’s mercy. It is the perfect first page because
            it teaches that the human story begins with guidance and return.
          </p>

          <div className="mt-6">
            <Link
              href="/Deen/Prophets/Adam"
              className="rounded-full bg-[#4f7a5a] px-6 py-3 text-sm font-semibold text-[#f7f2e8]"
            >
              Begin with Adam
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {prophets.map((prophet, index) =>
            prophet.clickable ? (
              <Link
                key={prophet.name}
                href={prophet.href}
                className="block rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6 transition hover:bg-[#fcf6ec]"
              >
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                      Prophet {index + 1} · {prophet.theme}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                      {prophet.name}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-[#4f7a5a]">
                      Times mentioned in the Quran: {prophet.mentions}
                    </p>

                    <p className="mt-4 text-base leading-8 text-[#5e6558]">
                      {prophet.description}
                    </p>
                  </div>

                  <div className="mt-5 md:mt-1">
                    <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                      Open
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={prophet.name}
                className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
              >
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                      Prophet {index + 1} · {prophet.theme}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold">
                      {prophet.name}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-[#4f7a5a]">
                      Times mentioned in the Quran: {prophet.mentions}
                    </p>

                    <p className="mt-4 text-base leading-8 text-[#5e6558]">
                      {prophet.description}
                    </p>
                  </div>

                  <div className="mt-5 md:mt-1">
                    <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                      Soon
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
