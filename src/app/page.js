import AnimeList from "@/app/components/AnimeList/index";
import CharactersList from "./components/CharactersList";
import MangaList from "./components/MangaList";
import Header from "./components/AnimeList/Header";

export default async function Page() {
  const response1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );

  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=10`
  );

  const response3 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`
  );

  const topAnime = await response1.json();
  const topCharacters = await response2.json();
  const topManga = await response3.json();

  return (
    <main className="bg-white w-100% h-screen">
      <Header title="top anime" linkTitle="lihat semua" linkHref="/populer" />
      <AnimeList api={topAnime} />
      <Header
        title="top character"
        linkTitle="lihat semua"
        linkHref="/populer"
      />
      <CharactersList api={topCharacters} />
      <Header title="top manga" linkTitle="lihat semua" linkHref="/populer" />
      <MangaList api={topManga} />
    </main>
  );
}
