import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "public", "data", "quran");
const chaptersDir = path.join(outputDir, "chapters");

const QF_CLIENT_ID = process.env.QF_CLIENT_ID;
const QF_CLIENT_SECRET = process.env.QF_CLIENT_SECRET;
const QF_ENV = process.env.QF_ENV === "prelive" ? "prelive" : "production";

if (!QF_CLIENT_ID || !QF_CLIENT_SECRET) {
  throw new Error(
    "Missing Quran Foundation API credentials. Add QF_CLIENT_ID and QF_CLIENT_SECRET to .env.local"
  );
}

const qfBaseUrl =
  QF_ENV === "prelive"
    ? "https://apis-prelive.quran.foundation"
    : "https://apis.quran.foundation";

const qfAuthUrl =
  QF_ENV === "prelive"
    ? "https://prelive-oauth2.quran.foundation/oauth2/token"
    : "https://oauth2.quran.foundation/oauth2/token";

async function getQfToken() {
  const basic = Buffer.from(
    `${QF_CLIENT_ID}:${QF_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(qfAuthUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&scope=content",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Failed to get Quran Foundation token: ${text}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function qfFetch(token, endpoint) {
  const response = await fetch(`${qfBaseUrl}${endpoint}`, {
    headers: {
      "x-auth-token": token,
      "x-client-id": QF_CLIENT_ID,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`QF request failed for ${endpoint}: ${text}`);
  }

  return response.json();
}

async function fetchQuranEncTranslation(chapterId) {
  const response = await fetch(
    `https://quranenc.com/api/v1/translation/sura/english_saheeh/${chapterId}`
  );

  if (!response.ok) {
    const text = await response.text();
    console.warn(
      `QuranEnc translation request failed for surah ${chapterId}: ${text}`
    );
    return new Map();
  }

  const data = await response.json();

  // QuranEnc docs say this should be a JSON array, but be defensive.
  const items = Array.isArray(data)
    ? data
    : Array.isArray(data?.result)
    ? data.result
    : [];

  if (!Array.isArray(items) || items.length === 0) {
    console.warn(
      `QuranEnc returned an unexpected translation payload for surah ${chapterId}. Proceeding without translation for this surah.`
    );
    return new Map();
  }

  const map = new Map();
  for (const item of items) {
    map.set(Number(item.aya), item.translation || "");
  }

  return map;
}

async function fetchAllVersesForChapter(token, chapterId) {
  let page = 1;
  const perPage = 50;
  const allVerses = [];

  while (true) {
    const data = await qfFetch(
      token,
      `/content/api/v4/verses/by_chapter/${chapterId}?language=en&words=false&translations=57&fields=text_uthmani&page=${page}&per_page=${perPage}`
    );

    const verses = data.verses ?? [];
    allVerses.push(...verses);

    const totalPages =
      data.pagination?.total_pages ??
      data.meta?.pagination?.total_pages ??
      1;

    if (page >= totalPages) break;
    page += 1;
  }

  return allVerses;
}

function pickField(obj, ...keys) {
  for (const key of keys) {
    if (obj?.[key] !== undefined && obj?.[key] !== null) return obj[key];
  }
  return "";
}

async function main() {
  await fs.mkdir(chaptersDir, { recursive: true });

  const token = await getQfToken();

  const chaptersResponse = await qfFetch(
    token,
    "/content/api/v4/chapters?language=en"
  );
  const chapters = chaptersResponse.chapters ?? [];

  const index = [];

  for (const chapter of chapters) {
    const chapterId = Number(pickField(chapter, "id", "chapter_id", "number"));
    console.log(`Importing Surah ${chapterId}...`);

    const [verses, translationMap] = await Promise.all([
      fetchAllVersesForChapter(token, chapterId),
      fetchQuranEncTranslation(chapterId),
    ]);

    const chapterData = {
      id: chapterId,
      name: pickField(chapter, "name_simple", "nameSimple"),
      transliteratedName: pickField(chapter, "name_complex", "nameComplex"),
      arabicName: pickField(chapter, "name_arabic", "nameArabic"),
      translatedName:
        pickField(chapter?.translated_name, "name") ||
        pickField(chapter, "translated_name"),
      versesCount: Number(
        pickField(chapter, "verses_count", "versesCount") || verses.length
      ),
      ayahs: verses.map((verse) => {
        const verseNumber = Number(
          pickField(verse, "verse_number", "verseNumber", "id")
        );

        return {
          number: verseNumber,
          verseKey: pickField(verse, "verse_key", "verseKey"),
          arabic: pickField(verse, "text_uthmani", "textUthmani"),
          transliteration: verse.translations?.[0]?.text || "",
          translation: translationMap.get(verseNumber) || "",
        };
      }),
    };

    index.push({
      id: chapterData.id,
      name: chapterData.name,
      transliteratedName: chapterData.transliteratedName,
      arabicName: chapterData.arabicName,
      translatedName: chapterData.translatedName,
      versesCount: chapterData.versesCount,
    });

    await fs.writeFile(
      path.join(chaptersDir, `${chapterId}.json`),
      JSON.stringify(chapterData, null, 2),
      "utf8"
    );
  }

  await fs.writeFile(
    path.join(outputDir, "index.json"),
    JSON.stringify(index, null, 2),
    "utf8"
  );

  console.log("Done. Full Quran data saved to public/data/quran/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});