import Link from "next/link";

const names = [
  {
    arabic: "ٱللَّٰه",
    transliteration: "Allah",
    meaning: "The One truly worthy of worship.",
    reflection:
      "All perfection belongs to Him, and every beautiful name returns to Him.",
  },
  {
    arabic: "ٱلرَّحْمَٰن",
    transliteration: "Ar-Rahman",
    meaning: "The Entirely Merciful.",
    reflection:
      "His mercy is vast, overflowing, and reaches all of creation.",
  },
  {
    arabic: "ٱلرَّحِيم",
    transliteration: "Ar-Rahim",
    meaning: "The Especially Merciful.",
    reflection:
      "His mercy is near and continuous for those who turn to Him.",
  },
  {
    arabic: "ٱلْمَلِك",
    transliteration: "Al-Malik",
    meaning: "The King.",
    reflection:
      "Real ownership, rule, and authority belong to Allah alone.",
  },
  {
    arabic: "ٱلْقُدُّوس",
    transliteration: "Al-Quddus",
    meaning: "The Most Pure.",
    reflection:
      "Allah is perfect and far above every flaw and imperfection.",
  },
  {
    arabic: "ٱلسَّلَام",
    transliteration: "As-Salam",
    meaning: "The Source of Peace.",
    reflection: "True peace comes from Him and by returning to Him.",
  },
  {
    arabic: "ٱلْمُؤْمِن",
    transliteration: "Al-Mu’min",
    meaning: "The Giver of Safety.",
    reflection:
      "He grants security, reassurance, and peace to hearts that trust Him.",
  },
  {
    arabic: "ٱلْمُهَيْمِن",
    transliteration: "Al-Muhaymin",
    meaning: "The Protector, the Overseer.",
    reflection:
      "Nothing escapes His knowledge, care, and complete watch.",
  },
  {
    arabic: "ٱلْعَزِيز",
    transliteration: "Al-‘Aziz",
    meaning: "The Almighty.",
    reflection: "He is never overpowered, weakened, or in need.",
  },
  {
    arabic: "ٱلْجَبَّار",
    transliteration: "Al-Jabbar",
    meaning: "The Compeller, the Restorer.",
    reflection:
      "He mends what is broken and all creation remains under His power.",
  },
  {
    arabic: "ٱلْمُتَكَبِّر",
    transliteration: "Al-Mutakabbir",
    meaning: "The Supremely Great.",
    reflection:
      "Greatness truly belongs only to Allah, never to the creation.",
  },
  {
    arabic: "ٱلْخَالِق",
    transliteration: "Al-Khaliq",
    meaning: "The Creator.",
    reflection:
      "He brought all things into existence with wisdom and purpose.",
  },
  {
    arabic: "ٱلْبَارِئ",
    transliteration: "Al-Bari’",
    meaning: "The Originator.",
    reflection:
      "He creates in perfect proportion and brings forth as He wills.",
  },
  {
    arabic: "ٱلْمُصَوِّر",
    transliteration: "Al-Musawwir",
    meaning: "The Fashioner.",
    reflection:
      "He gives every created thing its form, features, and design.",
  },
  {
    arabic: "ٱلْغَفَّار",
    transliteration: "Al-Ghaffar",
    meaning: "The Constant Forgiver.",
    reflection:
      "He forgives again and again for the one who returns sincerely.",
  },
  {
    arabic: "ٱلْقَهَّار",
    transliteration: "Al-Qahhar",
    meaning: "The Subduer.",
    reflection:
      "Everything is under His control and none can overcome Him.",
  },
  {
    arabic: "ٱلْوَهَّاب",
    transliteration: "Al-Wahhab",
    meaning: "The Ever-Giving.",
    reflection:
      "He gives generously and freely, without limit or need.",
  },
  {
    arabic: "ٱلرَّزَّاق",
    transliteration: "Ar-Razzaq",
    meaning: "The Provider.",
    reflection:
      "Every form of provision comes from Him alone.",
  },
  {
    arabic: "ٱلْفَتَّاح",
    transliteration: "Al-Fattah",
    meaning: "The Opener.",
    reflection:
      "He opens doors of mercy, relief, knowledge, and victory.",
  },
  {
    arabic: "ٱلْعَلِيم",
    transliteration: "Al-‘Alim",
    meaning: "The All-Knowing.",
    reflection:
      "He knows what is open and hidden, past and future, seen and unseen.",
  },
  {
    arabic: "ٱلْقَابِض",
    transliteration: "Al-Qabid",
    meaning: "The Withholder.",
    reflection:
      "He restricts with wisdom and never without purpose.",
  },
  {
    arabic: "ٱلْبَاسِط",
    transliteration: "Al-Basit",
    meaning: "The Expander.",
    reflection:
      "He expands provision, mercy, and relief as He wills.",
  },
  {
    arabic: "ٱلْخَافِض",
    transliteration: "Al-Khafid",
    meaning: "The Reducer.",
    reflection:
      "He lowers whom He wills in justice and wisdom.",
  },
  {
    arabic: "ٱلرَّافِع",
    transliteration: "Ar-Rafi‘",
    meaning: "The Exalter.",
    reflection:
      "He raises people in rank, honor, and nearness as He wills.",
  },
  {
    arabic: "ٱلْمُعِزّ",
    transliteration: "Al-Mu‘izz",
    meaning: "The Bestower of Honor.",
    reflection:
      "True honor comes only from Allah, never from worldly status alone.",
  },
  {
    arabic: "ٱلْمُذِلّ",
    transliteration: "Al-Mudhill",
    meaning: "The Giver of Humiliation.",
    reflection:
      "He humbles whom He wills in perfect justice.",
  },
  {
    arabic: "ٱلسَّمِيع",
    transliteration: "As-Sami‘",
    meaning: "The All-Hearing.",
    reflection:
      "No whisper, cry, prayer, or secret is missed by Him.",
  },
  {
    arabic: "ٱلْبَصِير",
    transliteration: "Al-Basir",
    meaning: "The All-Seeing.",
    reflection:
      "He sees every detail, every action, and every hidden state.",
  },
  {
    arabic: "ٱلْحَكَم",
    transliteration: "Al-Hakam",
    meaning: "The Perfect Judge.",
    reflection:
      "His judgment is always true, just, and free of ظلم.",
  },
  {
    arabic: "ٱلْعَدْل",
    transliteration: "Al-‘Adl",
    meaning: "The Utterly Just.",
    reflection:
      "Allah is never unfair; His justice is complete and perfect.",
  },
  {
    arabic: "ٱللَّطِيف",
    transliteration: "Al-Latif",
    meaning: "The Subtle, the Gentle.",
    reflection:
      "His kindness reaches us in ways we often do not even notice.",
  },
  {
    arabic: "ٱلْخَبِير",
    transliteration: "Al-Khabir",
    meaning: "The All-Aware.",
    reflection:
      "He knows the reality behind every matter and every heart.",
  },
  {
    arabic: "ٱلْحَلِيم",
    transliteration: "Al-Halim",
    meaning: "The Forbearing.",
    reflection:
      "He does not rush to punish and gives people room to return.",
  },
  {
    arabic: "ٱلْعَظِيم",
    transliteration: "Al-‘Azim",
    meaning: "The Magnificent.",
    reflection:
      "His greatness is beyond all comparison and beyond all limits.",
  },
  {
    arabic: "ٱلْغَفُور",
    transliteration: "Al-Ghafur",
    meaning: "The Great Forgiver.",
    reflection:
      "He covers sins and forgives deeply for the one who repents.",
  },
  {
    arabic: "ٱلشَّكُور",
    transliteration: "Ash-Shakur",
    meaning: "The Most Appreciative.",
    reflection:
      "He rewards even small sincere deeds with immense generosity.",
  },
  {
    arabic: "ٱلْعَلِيّ",
    transliteration: "Al-‘Aliyy",
    meaning: "The Most High.",
    reflection:
      "He is high above the creation in His majesty and perfection.",
  },
  {
    arabic: "ٱلْكَبِير",
    transliteration: "Al-Kabir",
    meaning: "The Most Great.",
    reflection:
      "Everything besides Him is small before His greatness.",
  },
  {
    arabic: "ٱلْحَفِيظ",
    transliteration: "Al-Hafiz",
    meaning: "The Preserver.",
    reflection:
      "He preserves what He wills with perfect care and power.",
  },
  {
    arabic: "ٱلْمُقِيت",
    transliteration: "Al-Muqit",
    meaning: "The Sustainer.",
    reflection:
      "He provides nourishment, strength, and maintenance for all.",
  },
  {
    arabic: "ٱلْحَسِيب",
    transliteration: "Al-Hasib",
    meaning: "The Reckoner, the Sufficient.",
    reflection:
      "He is enough for the servant and perfect in taking account.",
  },
  {
    arabic: "ٱلْجَلِيل",
    transliteration: "Al-Jalil",
    meaning: "The Majestic.",
    reflection:
      "His majesty fills the heart with awe, reverence, and humility.",
  },
  {
    arabic: "ٱلْكَرِيم",
    transliteration: "Al-Karim",
    meaning: "The Most Generous.",
    reflection:
      "He gives beyond expectation and honors His servants with generosity.",
  },
  {
    arabic: "ٱلرَّقِيب",
    transliteration: "Ar-Raqib",
    meaning: "The Watchful.",
    reflection:
      "He watches over everything without sleep, forgetfulness, or weakness.",
  },
  {
    arabic: "ٱلْمُجِيب",
    transliteration: "Al-Mujib",
    meaning: "The Responsive One.",
    reflection:
      "He answers the one who calls upon Him sincerely.",
  },
  {
    arabic: "ٱلْوَاسِع",
    transliteration: "Al-Wasi‘",
    meaning: "The All-Encompassing.",
    reflection:
      "His mercy, knowledge, and generosity are vast beyond measure.",
  },
  {
    arabic: "ٱلْحَكِيم",
    transliteration: "Al-Hakim",
    meaning: "The All-Wise.",
    reflection:
      "Everything He decrees and commands is filled with wisdom.",
  },
  {
    arabic: "ٱلْوَدُود",
    transliteration: "Al-Wadud",
    meaning: "The Most Loving.",
    reflection:
      "Allah’s love is pure, noble, and deeply healing for the one who turns back to Him.",
  },
  {
    arabic: "ٱلْمَجِيد",
    transliteration: "Al-Majid",
    meaning: "The Most Glorious.",
    reflection:
      "He is full of glory, nobility, honor, and praise.",
  },
  {
    arabic: "ٱلْبَاعِث",
    transliteration: "Al-Ba‘ith",
    meaning: "The Resurrector.",
    reflection:
      "He will raise creation again after death without difficulty.",
  },
  {
    arabic: "ٱلشَّهِيد",
    transliteration: "Ash-Shahid",
    meaning: "The Witness.",
    reflection:
      "He witnesses every deed, every word, and every intention.",
  },
  {
    arabic: "ٱلْحَقّ",
    transliteration: "Al-Haqq",
    meaning: "The Truth.",
    reflection:
      "He is the ultimate truth, and everything true comes from Him.",
  },
  {
    arabic: "ٱلْوَكِيل",
    transliteration: "Al-Wakil",
    meaning: "The Trustee.",
    reflection:
      "He is the One to rely on fully, with complete trust.",
  },
  {
    arabic: "ٱلْقَوِيّ",
    transliteration: "Al-Qawiyy",
    meaning: "The All-Strong.",
    reflection:
      "His strength is absolute, complete, and never diminished.",
  },
  {
    arabic: "ٱلْمَتِين",
    transliteration: "Al-Matin",
    meaning: "The Firm, the Steadfast.",
    reflection:
      "His power is perfect, enduring, and never shaken.",
  },
  {
    arabic: "ٱلْوَلِيّ",
    transliteration: "Al-Waliyy",
    meaning: "The Protecting Friend.",
    reflection:
      "He is close to the believers, helping and guarding them.",
  },
  {
    arabic: "ٱلْحَمِيد",
    transliteration: "Al-Hamid",
    meaning: "The Praiseworthy.",
    reflection:
      "He is deserving of all praise in every state and every decree.",
  },
  {
    arabic: "ٱلْمُحْصِي",
    transliteration: "Al-Muhsi",
    meaning: "The Accounter.",
    reflection:
      "He counts and knows everything perfectly, nothing is lost.",
  },
  {
    arabic: "ٱلْمُبْدِئ",
    transliteration: "Al-Mubdi’",
    meaning: "The Originator.",
    reflection:
      "He begins creation and brings things into being from nothing.",
  },
  {
    arabic: "ٱلْمُعِيد",
    transliteration: "Al-Mu‘id",
    meaning: "The Restorer.",
    reflection:
      "He brings creation back again and restores what He wills.",
  },
  {
    arabic: "ٱلْمُحْيِي",
    transliteration: "Al-Muhyi",
    meaning: "The Giver of Life.",
    reflection:
      "Life begins by His command and continues by His will.",
  },
  {
    arabic: "ٱلْمُمِيت",
    transliteration: "Al-Mumit",
    meaning: "The Creator of Death.",
    reflection:
      "Death comes only by His decree and wisdom.",
  },
  {
    arabic: "ٱلْحَيّ",
    transliteration: "Al-Hayy",
    meaning: "The Ever-Living.",
    reflection:
      "He lives with perfect life, never dying and never weakening.",
  },
  {
    arabic: "ٱلْقَيُّوم",
    transliteration: "Al-Qayyum",
    meaning: "The Self-Subsisting, the Sustainer.",
    reflection:
      "He needs no one, while everything depends entirely on Him.",
  },
  {
    arabic: "ٱلْوَاجِد",
    transliteration: "Al-Wajid",
    meaning: "The Finder, the Perceiver.",
    reflection:
      "Nothing is beyond His reach, knowledge, or power.",
  },
  {
    arabic: "ٱلْمَاجِد",
    transliteration: "Al-Majid",
    meaning: "The Noble, the Glorious.",
    reflection:
      "He is full of honor, magnificence, and exalted greatness.",
  },
  {
    arabic: "ٱلْوَاحِد",
    transliteration: "Al-Wahid",
    meaning: "The One.",
    reflection:
      "He is One with no partner, equal, or rival.",
  },
  {
    arabic: "ٱلصَّمَد",
    transliteration: "As-Samad",
    meaning: "The Eternal Refuge.",
    reflection:
      "All creation turns to Him in need, while He needs no one.",
  },
  {
    arabic: "ٱلْقَادِر",
    transliteration: "Al-Qadir",
    meaning: "The All-Powerful.",
    reflection:
      "He has full power over every matter without limitation.",
  },
  {
    arabic: "ٱلْمُقْتَدِر",
    transliteration: "Al-Muqtadir",
    meaning: "The Perfect in Power.",
    reflection:
      "His power is complete, precise, and never resisted.",
  },
  {
    arabic: "ٱلْمُقَدِّم",
    transliteration: "Al-Muqaddim",
    meaning: "The Expediter.",
    reflection:
      "He brings forward whom He wills and what He wills in wisdom.",
  },
  {
    arabic: "ٱلْمُؤَخِّر",
    transliteration: "Al-Mu’akhkhir",
    meaning: "The Delayer.",
    reflection:
      "He delays whom He wills and what He wills in perfect wisdom.",
  },
  {
    arabic: "ٱلأوَّل",
    transliteration: "Al-Awwal",
    meaning: "The First.",
    reflection:
      "There was nothing before Him; He is before all things.",
  },
  {
    arabic: "ٱلآخِر",
    transliteration: "Al-Akhir",
    meaning: "The Last.",
    reflection:
      "Everything ends, but He remains forever.",
  },
  {
    arabic: "ٱلظَّاهِر",
    transliteration: "Az-Zahir",
    meaning: "The Manifest.",
    reflection:
      "His signs and dominion are clear and evident throughout creation.",
  },
  {
    arabic: "ٱلْبَاطِن",
    transliteration: "Al-Batin",
    meaning: "The Hidden.",
    reflection:
      "He is near beyond what eyes can grasp or minds can contain.",
  },
  {
    arabic: "ٱلْوَالِي",
    transliteration: "Al-Wali",
    meaning: "The Governor.",
    reflection:
      "He manages all affairs with perfect control and order.",
  },
  {
    arabic: "ٱلْمُتَعَالِي",
    transliteration: "Al-Muta‘ali",
    meaning: "The Most Exalted.",
    reflection:
      "He is exalted above every deficiency and above all creation.",
  },
  {
    arabic: "ٱلْبَرّ",
    transliteration: "Al-Barr",
    meaning: "The Source of Goodness.",
    reflection:
      "His goodness is abundant, generous, and constant.",
  },
  {
    arabic: "ٱلتَّوَّاب",
    transliteration: "At-Tawwab",
    meaning: "The Acceptor of Repentance.",
    reflection:
      "He repeatedly welcomes back the servant who returns sincerely.",
  },
  {
    arabic: "ٱلْمُنْتَقِم",
    transliteration: "Al-Muntaqim",
    meaning: "The Avenger.",
    reflection:
      "He takes retribution with justice against persistent wrongdoing.",
  },
  {
    arabic: "ٱلْعَفُوّ",
    transliteration: "Al-‘Afuww",
    meaning: "The Pardoner.",
    reflection:
      "He erases sins and loves to pardon the one who turns back.",
  },
  {
    arabic: "ٱلرَّؤُوف",
    transliteration: "Ar-Ra’uf",
    meaning: "The Most Kind.",
    reflection:
      "His compassion is gentle, tender, and full of care.",
  },
  {
    arabic: "مَالِكُ ٱلْمُلْك",
    transliteration: "Malik-ul-Mulk",
    meaning: "Owner of All Sovereignty.",
    reflection:
      "He gives and takes dominion as He wills, and all rule belongs to Him.",
  },
  {
    arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام",
    transliteration: "Dhul-Jalali wal-Ikram",
    meaning: "Lord of Majesty and Honor.",
    reflection:
      "He is worthy of awe, reverence, love, and complete devotion.",
  },
  {
    arabic: "ٱلْمُقْسِط",
    transliteration: "Al-Muqsit",
    meaning: "The Most Just.",
    reflection:
      "He brings about justice with total fairness and perfect balance.",
  },
  {
    arabic: "ٱلْجَامِع",
    transliteration: "Al-Jami‘",
    meaning: "The Gatherer.",
    reflection:
      "He gathers creation together and leaves nothing scattered from His knowledge.",
  },
  {
    arabic: "ٱلْغَنِيّ",
    transliteration: "Al-Ghaniyy",
    meaning: "The Self-Sufficient.",
    reflection:
      "He is free of all need while all things need Him.",
  },
  {
    arabic: "ٱلْمُغْنِي",
    transliteration: "Al-Mughni",
    meaning: "The Enricher.",
    reflection:
      "He grants sufficiency, wealth, and contentment as He wills.",
  },
  {
    arabic: "ٱلْمَانِع",
    transliteration: "Al-Mani‘",
    meaning: "The Withholder.",
    reflection:
      "He prevents with wisdom and protects by what He withholds.",
  },
  {
    arabic: "ٱلضَّارّ",
    transliteration: "Ad-Darr",
    meaning: "The Creator of Harm.",
    reflection:
      "Nothing harmful occurs except by His decree and perfect wisdom.",
  },
  {
    arabic: "ٱلنَّافِع",
    transliteration: "An-Nafi‘",
    meaning: "The Bestower of Benefit.",
    reflection:
      "Every true benefit comes from Him alone.",
  },
  {
    arabic: "ٱلنُّور",
    transliteration: "An-Nur",
    meaning: "The Light.",
    reflection:
      "He is the light of the heavens and the earth, guiding hearts by His light.",
  },
  {
    arabic: "ٱلْهَادِي",
    transliteration: "Al-Hadi",
    meaning: "The Guide.",
    reflection:
      "He guides whom He wills to truth, clarity, and straightness.",
  },
  {
    arabic: "ٱلْبَدِيع",
    transliteration: "Al-Badi‘",
    meaning: "The Incomparable Originator.",
    reflection:
      "He creates in wondrous ways without any prior example.",
  },
  {
    arabic: "ٱلْبَاقِي",
    transliteration: "Al-Baqi",
    meaning: "The Everlasting.",
    reflection:
      "Everything passes away, but Allah remains forever.",
  },
  {
    arabic: "ٱلْوَارِث",
    transliteration: "Al-Warith",
    meaning: "The Inheritor.",
    reflection:
      "All things return to Him, and He remains after all creation ends.",
  },
  {
    arabic: "ٱلرَّشِيد",
    transliteration: "Ar-Rashid",
    meaning: "The Guide to the Right Way.",
    reflection:
      "His guidance is perfectly right, wise, and beneficial.",
  },
  {
    arabic: "ٱلصَّبُور",
    transliteration: "As-Sabur",
    meaning: "The Most Patient.",
    reflection:
      "He is not hasty in punishment and gives His servants chances to return.",
  },
];

export default function NamesOfAllahPage() {
  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(79,122,90,0.10),_transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Link
            href="/"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Names of Allah
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Know Allah through His beautiful names and let the heart draw nearer.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Learning the names of Allah is not only about memorising words. It
            is about knowing your Lord more deeply — loving Him more, fearing
            Him correctly, hoping in Him sincerely, and trusting Him more fully.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Opening reflection
          </p>

          <blockquote className="mt-5 text-2xl leading-relaxed text-[#2f3a2f] md:text-3xl">
            “And to Allah belong the best names, so call upon Him by them.”
          </blockquote>

          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#4f7a5a]">
            Surah Al-A‘raf 7:180
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            The names of Allah are not decoration. They are doors into deeper
            worship, deeper dua, and deeper certainty in who Allah is.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {names.map((name, index) => (
            <div
              key={name.transliteration + index}
              className="relative overflow-hidden rounded-[30px] border border-[#e3d8c8] bg-[#fffaf2] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(176,141,87,0.10),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(79,122,90,0.08),_transparent_30%)]" />

              <div className="relative">
                <p className="text-sm uppercase tracking-[0.28em] text-[#b08d57]">
                  Name {index + 1}
                </p>

                <p className="mt-4 text-right text-3xl leading-[2] text-[#2f3a2f] md:text-4xl">
                  {name.arabic}
                </p>

                <h2 className="mt-5 text-2xl font-semibold">
                  {name.transliteration}
                </h2>

                <p className="mt-3 text-base font-medium leading-8 text-[#4f7a5a]">
                  {name.meaning}
                </p>

                <p className="mt-4 text-base leading-8 text-[#5e6558]">
                  {name.reflection}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Gentle note
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5e6558]">
            This is now a standalone section and holds the full 99 names in a
            calm tiled layout, so it feels beautiful to read, reflect on, and
            return to often.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-[#4f7a5a] px-6 py-3 text-sm font-semibold text-[#f7f2e8]"
            >
              Back to Home
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
