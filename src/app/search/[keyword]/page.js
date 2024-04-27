import AnimeList from "@/app/components/AnimeList/index";
import CharactersList from "@/app/components/CharactersList";
import MangaList from "@/app/components/MangaList";
import Header from "@/app/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const response1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const response2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=10`
  );
  const response3 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`
  );

  const searchAnime = await response1.json();
  const topCharacters = await response2.json();
  const topManga = await response3.json();

  return (
    <main className="bg-white w-100% h-screen mt-24">
      <Header title={`pencarian untuk ${keyword}...`} linkHref="/populer" />
      <AnimeList api={searchAnime} />
    </main>
  );
}
