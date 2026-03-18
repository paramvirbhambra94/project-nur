import Link from "next/link";

const entries = [
  {
    title: "Morning and evening remembrance",
    arabic: "أَصْـبَحْنا وَأَصْـبَحَ المـلكُ لله",
    transliteration: "Asbahna wa asbahal-mulku lillah",
    meaning:
      "We have entered a new morning, and all dominion belongs to Allah.",
    reflection:
      "A soft way to begin the day by remembering that life, time, and control belong to Allah.",
  },
  {
    title: "Seeking forgiveness",
    arabic: "أَسْتَغْفِرُ ٱللَّٰه",
    transliteration: "Astaghfirullah",
    meaning: "I seek forgiveness from Allah.",
    reflection:
      "A short dhikr that keeps the heart humble, clean, and always returning.",
  },
  {
    title: "Tahlil",
    arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰه",
    transliteration: "La ilaha illa Allah",
    meaning: "There is no god worthy of worship except Allah.",
    reflection:
      "The heart of tawheed. A believer returns to this constantly for grounding and sincerity.",
  },
  {
    title: "Tasbih",
    arabic: "سُبْحَانَ ٱللَّٰه",
    transliteration: "SubhanAllah",
    meaning: "Glory be to Allah.",
    reflection:
      "A remembrance that clears the heart and reminds it of Allah’s perfection.",
  },
  {
    title: "Tahmid",
    arabic: "ٱلْحَمْدُ لِلَّٰه",
    transliteration: "Alhamdulillah",
    meaning: "All praise belongs to Allah.",
    reflection:
      "A simple return to gratitude in ease, hardship, routine, and blessing.",
  },
  {
    title: "Takbir",
    arabic: "ٱللَّٰهُ أَكْبَر",
    transliteration: "Allahu Akbar",
    meaning: "Allah is the Greatest.",
    reflection:
      "A powerful reminder that Allah is greater than every fear, task, worry, and attachment.",
  },
  {
    title: "Hawqalah",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰه",
    transliteration: "La hawla wa la quwwata illa بالله",
    meaning: "There is no might and no power except through Allah.",
    reflection:
      "This dhikr teaches surrender, reliance, and the truth that strength is from Allah alone.",
  },
  {
    title: "Sending peace upon the Prophet ﷺ",
    arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّد",
    transliteration: "Allahumma salli 'ala Muhammad",
    meaning: "O Allah, send Your prayers upon Muhammad.",
    reflection:
      "A beautiful remembrance that nourishes love for the Messenger of Allah ﷺ.",
  },
  {
    title: "Before sleep",
    arabic: "بِاسْمِكَ ٱللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    meaning: "In Your name, O Allah, I die and I live.",
    reflection:
      "A calm way to end the day by surrendering the soul to Allah before sleep.",
  },
  {
    title: "Upon waking",
    arabic: "ٱلْحَمْدُ لِلَّٰهِ ٱلَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
    transliteration: "Alhamdulillahil-ladhi ahyana ba'da ma amatana",
    meaning: "All praise is for Allah who gave us life after causing us to die.",
    reflection:
      "A beautiful way to begin the morning with gratitude for life and return.",
  },
  {
    title: "For guidance",
    arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
    transliteration: "Rabbana la tuzigh qulubana ba'da idh hadaytana",
    meaning:
      "Our Lord, do not let our hearts deviate after You have guided us.",
    reflection:
      "A Quranic dua for steadiness, sincerity, and protection from slipping after guidance.",
  },
  {
    title: "For mercy",
    arabic: "رَبِّ ٱغْفِرْ وَٱرْحَمْ",
    transliteration: "Rabbighfir warham",
    meaning: "My Lord, forgive and have mercy.",
    reflection:
      "Short, intimate, and deeply needed. A dua that belongs in daily life.",
  },
  {
    title: "For beneficial knowledge",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    meaning: "My Lord, increase me in knowledge.",
    reflection:
      "A simple dua that keeps learning connected to humility and dependence on Allah.",
  },
  {
    title: "For patience",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
    transliteration: "Rabbana afrigh 'alayna sabra",
    meaning: "Our Lord, pour upon us patience.",
    reflection:
      "A dua for moments that feel heavy, stretching the heart toward sabr and steadiness.",
  },
  {
    title: "For gratitude",
    arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
    transliteration: "Rabbi awzi'ni an ashkura ni'matak",
    meaning: "My Lord, enable me to be grateful for Your favor.",
    reflection:
      "A beautiful Quranic dua that asks not only for blessings, but for the ability to thank Allah for them.",
  },
  {
    title: "For ease in hardship",
    arabic: "حَسْبُنَا ٱللَّٰهُ وَنِعْمَ ٱلْوَكِيل",
    transliteration: "HasbunAllahu wa ni'mal-wakil",
    meaning: "Allah is sufficient for us, and He is the best disposer of affairs.",
    reflection:
      "A strong remembrance for heavy moments when the heart needs reliance and release.",
  },
  {
    title: "After salah remembrance",
    arabic: "سُبْحَانَ ٱللَّٰه • ٱلْحَمْدُ لِلَّٰه • ٱللَّٰهُ أَكْبَر",
    transliteration: "SubhanAllah • Alhamdulillah • Allahu Akbar",
    meaning:
      "Glory be to Allah • All praise belongs to Allah • Allah is the Greatest.",
    reflection:
      "A beautiful way to remain in remembrance after prayer before returning to daily life.",
  },
];

export default function DhikrDuaPage() {
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
            Dhikr & Dua
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            A calm page of remembrance and supplication to return to throughout the day.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Dhikr softens the heart. Dua opens it. This page is meant to feel
            simple, beautiful, and easy to revisit — not crowded, not heavy,
            just a gentle place to remember Allah often.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Gentle note
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This page is intentionally flowing and simple. It is not arranged
            into heavy categories. Just return, read, remember, and let the
            heart stay connected to Allah.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div
              key={`${entry.title}-${index}`}
              className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Remembrance {index + 1}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">{entry.title}</h2>

              <p className="mt-6 text-right text-3xl leading-[2] text-[#2f3a2f] md:text-4xl">
                {entry.arabic}
              </p>

              <p className="mt-6 text-lg italic leading-8 text-[#4a5148]">
                {entry.transliteration}
              </p>

              <p className="mt-4 text-base font-medium leading-8 text-[#4f7a5a]">
                {entry.meaning}
              </p>

              <p className="mt-4 text-base leading-8 text-[#5e6558]">
                {entry.reflection}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
