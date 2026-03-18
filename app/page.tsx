"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const projectNurFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sections = [
  {
    title: "Quran",
    description:
      "Read with Arabic, Roman transliteration, and a calm layout designed for closeness and clarity.",
    href: "/Quran",
  },
  {
    title: "Deen",
    description:
      "Learn through foundations, prophets, worship, seerah, character, and gentle guided study.",
    href: "/Deen",
  },
  {
    title: "Names of Allah",
    description:
      "Reflect on the beautiful names of Allah and their meanings through a soft, elegant space made for remembrance.",
    href: "/Names-of-Allah",
  },
  {
    title: "Explore",
    description:
      "Browse reminders, reflections, and themes that help the heart stay connected.",
    href: "/Explore",
  },
  {
    title: "My Nur",
    description:
      "Return to your journey, saved progress, bookmarks, and personal space.",
    href: "/My-Nur",
  },
];

type PrayerTimes = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

type PrayerState = {
  loading: boolean;
  error: string;
  timings: PrayerTimes | null;
  timezone: string;
  nextPrayer: string;
};

function cleanTime(value: string) {
  return value.split(" ")[0].trim();
}

function buildPrayerDate(time: string) {
  const [hours, minutes] = cleanTime(time).split(":").map(Number);
  const now = new Date();
  const date = new Date(now);
  date.setHours(hours || 0, minutes || 0, 0, 0);
  return date;
}

function getNextPrayerName(timings: PrayerTimes | null) {
  if (!timings) return "";

  const order: Array<keyof PrayerTimes> = [
    "Fajr",
    "Dhuhr",
    "Asr",
    "Maghrib",
    "Isha",
  ];

  const now = new Date();

  for (const prayer of order) {
    const prayerDate = buildPrayerDate(timings[prayer]);
    if (prayerDate > now) {
      return prayer;
    }
  }

  return "Fajr";
}

export default function HomePage() {
  const [prayerState, setPrayerState] = useState<PrayerState>({
    loading: true,
    error: "",
    timings: null,
    timezone: "",
    nextPrayer: "",
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setPrayerState({
        loading: false,
        error: "Location is not supported on this device.",
        timings: null,
        timezone: "",
        nextPrayer: "",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
          );

          const json = await response.json();

          if (!response.ok || !json?.data?.timings) {
            throw new Error("Unable to load prayer times right now.");
          }

          const timings: PrayerTimes = {
            Fajr: cleanTime(json.data.timings.Fajr),
            Dhuhr: cleanTime(json.data.timings.Dhuhr),
            Asr: cleanTime(json.data.timings.Asr),
            Maghrib: cleanTime(json.data.timings.Maghrib),
            Isha: cleanTime(json.data.timings.Isha),
          };

          setPrayerState({
            loading: false,
            error: "",
            timings,
            timezone:
              json?.data?.meta?.timezone ||
              Intl.DateTimeFormat().resolvedOptions().timeZone ||
              "",
            nextPrayer: getNextPrayerName(timings),
          });
        } catch {
          setPrayerState({
            loading: false,
            error: "Unable to load prayer times right now.",
            timings: null,
            timezone: "",
            nextPrayer: "",
          });
        }
      },
      (error) => {
        let message = "Location permission was denied.";

        if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your location could not be determined.";
        }

        if (error.code === error.TIMEOUT) {
          message = "Location request timed out.";
        }

        setPrayerState({
          loading: false,
          error: message,
          timings: null,
          timezone: "",
          nextPrayer: "",
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 12000,
        maximumAge: 300000,
      }
    );
  }, []);

  const todayLabel = useMemo(() => {
    return new Date().toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f] antialiased">
      <section className="relative overflow-hidden border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,141,87,0.10),_transparent_25%),radial-gradient(circle_at_center,_rgba(79,122,90,0.08),_transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-[#b08d57]">
              A calm beginning
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 md:gap-6">
              <div className="relative h-40 w-40 shrink-0 md:h-72 md:w-72">
                <Image
                  src="/logo-symbol.png"
                  alt="Project Nur logo symbol"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h1
                className={`${projectNurFont.className} text-center text-5xl font-bold leading-[0.95] text-[#3f6b4c] md:text-[7rem]`}
              >
                Project Nur
              </h1>

              <div className="relative h-40 w-40 shrink-0 md:h-72 md:w-72">
                <Image
                  src="/logo-symbol.png"
                  alt="Project Nur logo symbol"
                  fill
                  className="object-contain scale-x-[-1]"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 text-center text-lg tracking-[0.28em] text-[#b08d57] md:text-xl">
              نُور
            </p>

            <div className="mx-auto mt-8 h-px w-28 bg-[#d8c39b]" />

            <h2 className="mx-auto mt-10 max-w-4xl text-center text-3xl font-semibold leading-tight md:text-5xl">
              A gentle place to read Quran,
              <span className="block text-[#4f7a5a]">
                learn deen, and return often.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-[#5e6558] md:text-lg">
              Built for people who want closeness to the Quran and Islam through
              a softer, simpler experience — one that feels welcoming, rooted,
              and easy to return to.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
              <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2]/90 p-8 text-left shadow-sm backdrop-blur-sm md:p-10">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
                  Mission
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
                  To make returning to Quran and deen feel gentle, clear, and deeply rooted.
                </h3>

                <p className="mt-5 text-base leading-8 text-[#5e6558]">
                  Project Nur exists to remove friction from learning and create
                  a calm digital space where a person can read, reflect,
                  worship, and grow closer to Allah without feeling overwhelmed.
                </p>
              </div>

              <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2]/90 p-8 text-left shadow-sm backdrop-blur-sm md:p-10">
                <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
                  About Project Nur
                </p>

                <p className="mt-5 text-base leading-8 text-[#5e6558]">
                  Project Nur is being built as a soft and practical companion
                  for Muslims and anyone sincerely exploring Islam. It brings
                  together Quran reading, foundational learning, prophetic
                  stories, worship guidance, reflection, and remembrance in one
                  place — designed with beauty, simplicity, and consistency in
                  mind.
                </p>

                <p className="mt-5 text-base leading-8 text-[#5e6558]">
                  The aim is not just to provide information, but to create a
                  space people want to return to often — one that feels
                  peaceful, trustworthy, and spiritually useful in daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
                Prayer Times
              </p>

              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Today’s salah times based on your location
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#5e6558]">
                Allow location access and Project Nur will load today’s prayer
                times automatically.
              </p>
            </div>

            <div className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2 text-sm font-medium text-[#4f7a5a]">
              {todayLabel}
            </div>
          </div>

          {prayerState.loading && (
            <div className="mt-8 rounded-[24px] border border-[#eee4d4] bg-[#fcf8f0] p-6">
              <p className="text-base leading-8 text-[#5e6558]">
                Loading prayer times for your location...
              </p>
            </div>
          )}

          {!prayerState.loading && prayerState.error && (
            <div className="mt-8 rounded-[24px] border border-[#eee4d4] bg-[#fcf8f0] p-6">
              <p className="text-base font-medium text-[#2f3a2f]">
                Prayer times unavailable
              </p>
              <p className="mt-3 text-base leading-8 text-[#5e6558]">
                {prayerState.error} Refresh the page and allow location access
                to try again.
              </p>
            </div>
          )}

          {!prayerState.loading && prayerState.timings && (
            <>
              <div className="mt-8 grid gap-4 md:grid-cols-5">
                {(
                  [
                    ["Fajr", prayerState.timings.Fajr],
                    ["Dhuhr", prayerState.timings.Dhuhr],
                    ["Asr", prayerState.timings.Asr],
                    ["Maghrib", prayerState.timings.Maghrib],
                    ["Isha", prayerState.timings.Isha],
                  ] as const
                ).map(([name, time]) => {
                  const isNext = prayerState.nextPrayer === name;

                  return (
                    <div
                      key={name}
                      className={`rounded-[24px] border p-5 ${
                        isNext
                          ? "border-[#4f7a5a] bg-[#eef5ee]"
                          : "border-[#eee4d4] bg-[#fcf8f0]"
                      }`}
                    >
                      <p className="text-sm uppercase tracking-[0.28em] text-[#b08d57]">
                        {name}
                      </p>

                      <p className="mt-4 text-2xl font-semibold text-[#2f3a2f]">
                        {time}
                      </p>

                      <p className="mt-3 text-sm text-[#5e6558]">
                        {isNext ? "Next prayer" : "Today"}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#5e6558]">
                <span className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2">
                  Automatic location enabled
                </span>

                {prayerState.timezone && (
                  <span className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2">
                    {prayerState.timezone}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="block rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6 transition hover:bg-[#fcf6ec]"
            >
              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                    Section
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-base leading-8 text-[#5e6558]">
                    {section.description}
                  </p>
                </div>

                <div className="mt-5 md:mt-1">
                  <span className="rounded-full border border-[#d9cfbc] bg-white px-5 py-2.5 text-sm font-medium text-[#4f7a5a]">
                    Enter
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
