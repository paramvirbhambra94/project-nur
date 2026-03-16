"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SurahIndexItem = {
  id: number;
  name: string;
  transliteratedName: string;
  arabicName: string;
  translatedName: string;
  versesCount: number;
};

type LastRead = {
  surahId: number;
  surahName: string;
  ayahNumber: number;
};

type BookmarkItem = {
  surahId: number;
  surahName: string;
  ayahNumber: number;
  arabic: string;
  transliteration: string;
};

const LAST_READ_KEY = "project_nur_last_read";
const BOOKMARKS_KEY = "project_nur_bookmarks";

export default function QuranPage() {
  const [surahs, setSurahs] = useState<SurahIndexItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastRead, setLastRead] = useState<LastRead | null>(null);
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [showSavedAyahs, setShowSavedAyahs] = useState(false);

  useEffect(() => {
    async function loadSurahs() {
      const response = await fetch("/data/quran/index.json");
      const data = await response.json();
      setSurahs(data);
      setLoading(false);
    }

    loadSurahs();

    const storedLastRead = localStorage.getItem(LAST_READ_KEY);
    const storedBookmarks = localStorage.getItem(BOOKMARKS_KEY);

    if (storedLastRead) {
      setLastRead(JSON.parse(storedLastRead));
    }

    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  function removeBookmark(surahId: number, ayahNumber: number) {
    const updated = bookmarks.filter(
      (item) => !(item.surahId === surahId && item.ayahNumber === ayahNumber)
    );

    setBookmarks(updated);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen bg-[#f7f2e8] text-[#2f3a2f]">
      <section className="border-b border-[#e3d8c8] bg-[#fbf7ef]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b08d57]">
            Quran
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            Choose a surah and enter the reader.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#5e6558]">
            Read every chapter of the Quran in a calm space designed for clarity,
            Arabic, transliteration, and gentle return.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
              Continue reading
            </p>

            {lastRead ? (
              <>
                <h2 className="mt-3 text-2xl font-semibold">
                  {lastRead.surahName}
                </h2>
                <p className="mt-2 text-base text-[#5e6558]">
                  Resume from ayah {lastRead.ayahNumber}
                </p>
                <Link
                  href={`/Quran/${lastRead.surahId}#ayah-${lastRead.ayahNumber}`}
                  className="mt-5 inline-block rounded-full bg-[#4f7a5a] px-5 py-2.5 text-sm font-semibold text-[#f7f2e8]"
                >
                  Continue
                </Link>
              </>
            ) : (
              <p className="mt-3 text-base text-[#5e6558]">
                No reading progress saved yet.
              </p>
            )}
          </div>

          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                  Saved ayahs
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  {bookmarks.length}
                </h2>
                <p className="mt-2 text-base text-[#5e6558]">
                  Bookmarked ayahs saved in your browser for now.
                </p>
              </div>

              {bookmarks.length > 0 && (
                <button
                  onClick={() => setShowSavedAyahs((v) => !v)}
                  className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2 text-sm font-medium text-[#4f7a5a]"
                >
                  {showSavedAyahs ? "Hide" : "View"}
                </button>
              )}
            </div>
          </div>
        </div>

        {showSavedAyahs && bookmarks.length > 0 && (
          <div className="mt-4 rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
              Your saved ayahs
            </p>

            <div className="mt-5 space-y-3">
              {bookmarks.map((item) => (
                <div
                  key={`${item.surahId}-${item.ayahNumber}`}
                  className="rounded-[22px] border border-[#eee4d4] bg-[#fcf8f0] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-3xl">
                      <p className="text-sm uppercase tracking-[0.25em] text-[#b08d57]">
                        {item.surahName} · Ayah {item.ayahNumber}
                      </p>

                      <p className="mt-3 text-xl text-right leading-[2] text-[#2f3a2f]">
                        {item.arabic}
                      </p>

                      <p className="mt-3 text-base italic leading-7 text-[#5e6558]">
                        {item.transliteration}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Link
                        href={`/Quran/${item.surahId}#ayah-${item.ayahNumber}`}
                        className="rounded-full bg-[#4f7a5a] px-4 py-2 text-sm font-medium text-[#f7f2e8]"
                      >
                        Open
                      </Link>

                      <button
                        onClick={() =>
                          removeBookmark(item.surahId, item.ayahNumber)
                        }
                        className="rounded-full border border-[#d9cfbc] bg-white px-4 py-2 text-sm font-medium text-[#7a6b55]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        {loading ? (
          <div className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6">
            Loading Quran...
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {surahs.map((surah) => (
              <Link
                key={surah.id}
                href={`/Quran/${surah.id}`}
                className="rounded-[28px] border border-[#e3d8c8] bg-[#fffaf2] p-6 transition hover:bg-[#fcf6ec]"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#b08d57]">
                  Surah {surah.id}
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  {surah.transliteratedName || surah.name}
                </h2>

                <p className="mt-2 text-xl text-[#4f7a5a]">{surah.arabicName}</p>

                <p className="mt-2 text-sm text-[#5e6558]">
                  {surah.translatedName}
                </p>

                <p className="mt-4 text-sm font-medium text-[#7a6b55]">
                  {surah.versesCount} ayahs
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}