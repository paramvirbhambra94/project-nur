"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Ayah = {
  number: number;
  verseKey: string;
  arabic: string;
  simpleArabic?: string;
  transliteration: string;
  translation: string;
};

type SurahData = {
  id: number;
  name: string;
  transliteratedName: string;
  arabicName: string;
  translatedName: string;
  versesCount: number;
  ayahs: Ayah[];
};

type BookmarkItem = {
  surahId: number;
  surahName: string;
  ayahNumber: number;
  arabic: string;
  transliteration: string;
};

const BOOKMARKS_KEY = "project_nur_bookmarks";
const LAST_READ_KEY = "project_nur_last_read";

export default function SurahReaderPage() {
  const params = useParams();
  const surah = Array.isArray(params.surah) ? params.surah[0] : params.surah;

  const [data, setData] = useState<SurahData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [arabicScript, setArabicScript] = useState<"uthmani" | "simple">(
    "uthmani"
  );
  const [arabicSize, setArabicSize] = useState<"sm" | "md" | "lg">("md");
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    async function loadSurah() {
      const response = await fetch(`/data/quran/chapters/${surah}.json`);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    if (surah) {
      loadSurah();
    }
  }, [surah]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
    }
  }, [loading]);

  const arabicSizeClass = useMemo(() => {
    if (arabicSize === "sm") return "text-2xl md:text-3xl";
    if (arabicSize === "lg") return "text-4xl md:text-5xl";
    return "text-3xl md:text-4xl";
  }, [arabicSize]);

  const shouldShowBismillah = data?.id !== 9;

  function isBookmarked(ayah: Ayah) {
    if (!data) return false;
    return bookmarks.some(
      (item) => item.surahId === data.id && item.ayahNumber === ayah.number
    );
  }

  function toggleBookmark(ayah: Ayah) {
    if (!data) return;

    const exists = bookmarks.some(
      (item) => item.surahId === data.id && item.ayahNumber === ayah.number
    );

    let updated: BookmarkItem[];

    if (exists) {
      updated = bookmarks.filter(
        (item) => !(item.surahId === data.id && item.ayahNumber === ayah.number)
      );
    } else {
      updated = [
        {
          surahId: data.id,
          surahName: data.transliteratedName || data.name,
          ayahNumber: ayah.number,
          arabic:
            arabicScript === "simple"
              ? ayah.simpleArabic || ayah.arabic
              : ayah.arabic,
          transliteration: ayah.transliteration,
        },
        ...bookmarks,
      ];
    }

    setBookmarks(updated);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  }

  function markLastRead(ayah: Ayah) {
    if (!data) return;

    const payload = {
      surahId: data.id,
      surahName: data.transliteratedName || data.name,
      ayahNumber: ayah.number,
    };

    localStorage.setItem(LAST_READ_KEY, JSON.stringify(payload));
  }

  function getArabicText(ayah: Ayah) {
    if (arabicScript === "simple") {
      return ayah.simpleArabic || ayah.arabic;
    }

    return ayah.arabic;
  }

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#f7f2e8] px-6 py-16 text-[#2f3a2f]">
        Loading surah...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f]">
      <section className="border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Link
            href="/Quran"
            className="text-sm font-medium text-[#4f7a5a] hover:underline"
          >
            ← Back to Surahs
          </Link>

          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Surah {data.id}
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            {data.transliteratedName || data.name}
          </h1>

          <p className="mt-3 text-2xl text-[#4f7a5a]">{data.arabicName}</p>

          <p className="mt-3 text-lg leading-8 text-[#5e6558]">
            {data.translatedName}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="min-w-[90px] text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
              Script
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setArabicScript("uthmani")}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  arabicScript === "uthmani"
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Uthmani
              </button>

              <button
                onClick={() => setArabicScript("simple")}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  arabicScript === "simple"
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Simple Arabic
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <p className="min-w-[90px] text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
              Text
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowTransliteration((v) => !v)}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  showTransliteration
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Transliteration
              </button>

              <button
                onClick={() => setShowTranslation((v) => !v)}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  showTranslation
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Translation
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <p className="min-w-[90px] text-sm font-semibold uppercase tracking-[0.2em] text-[#b08d57]">
              Size
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setArabicSize("sm")}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  arabicSize === "sm"
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Small
              </button>

              <button
                onClick={() => setArabicSize("md")}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  arabicSize === "md"
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Medium
              </button>

              <button
                onClick={() => setArabicSize("lg")}
                className={`rounded-full px-5 py-2.5 text-sm ${
                  arabicSize === "lg"
                    ? "bg-[#4f7a5a] text-[#f7f2e8]"
                    : "border border-[#d9cfbc] bg-white text-[#4a5148]"
                }`}
              >
                Large
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[32px] border border-[#e3d8c8] bg-[#fffaf2] p-8 md:p-10">
          {shouldShowBismillah && (
            <div className="mb-8 rounded-[24px] border border-[#eee4d4] bg-[#fcf8f0] p-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                Opening
              </p>

              <p className="mt-5 text-right text-3xl leading-[2.2] text-[#2f3a2f] md:text-4xl">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>

              <p className="mt-5 text-lg italic leading-8 text-[#4a5148]">
                Bismillāhir-Raḥmānir-Raḥīm
              </p>

              <p className="mt-3 text-base leading-8 text-[#5e6558]">
                In the name of Allah, the Most Merciful, the Especially Merciful.
              </p>
            </div>
          )}

          <div className="space-y-6">
            {data.ayahs.map((ayah) => {
              const bookmarked = isBookmarked(ayah);

              return (
                <div
                  id={`ayah-${ayah.number}`}
                  key={ayah.verseKey || ayah.number}
                  className="rounded-[24px] border border-[#eee4d4] bg-[#fcf8f0] p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="rounded-full bg-[#efe5d5] px-3 py-1 text-sm font-semibold text-[#7a6b55]">
                      {ayah.number}
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => markLastRead(ayah)}
                        className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2 text-sm font-medium text-[#7a6b55] hover:text-[#4f7a5a]"
                      >
                        Mark read
                      </button>

                      <button
                        onClick={() => toggleBookmark(ayah)}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                          bookmarked
                            ? "border-[#4f7a5a] bg-[#eef5ee] text-[#4f7a5a]"
                            : "border-[#d9cfbc] bg-white text-[#7a6b55]"
                        }`}
                      >
                        {bookmarked ? "Saved" : "Save"}
                      </button>
                    </div>
                  </div>

                  <p
                    className={`mt-6 text-right leading-[2.2] text-[#2f3a2f] ${arabicSizeClass}`}
                  >
                    {getArabicText(ayah)}
                  </p>

                  {showTransliteration && (
                    <p className="mt-6 text-lg italic leading-8 text-[#4a5148]">
                      {ayah.transliteration}
                    </p>
                  )}

                  {showTranslation && (
                    <p className="mt-4 text-base leading-8 text-[#5e6558]">
                      {ayah.translation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
