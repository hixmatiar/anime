import AnimeList from "@/app/components/AnimeList/index";
import Header from "@/app/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";

export default async function Page({ params }) {
  const { keyword } = params;
  const keywordBaru = decodeURI(keyword);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keywordBaru}`
  // );
  // const searchAnime = await response.json();
  const searchAnime = await getAnimeResponse("anime", `q=${keywordBaru}`);

  return (
    <main className="bg-white w-100% h-screen">
      <Header title={`pencarian untuk ${keywordBaru}...`} linkHref="/populer" />
      <AnimeList api={searchAnime} />
    </main>
  );
}
