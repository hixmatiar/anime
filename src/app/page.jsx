import AnimeList from "@/app/components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";
import { register } from "swiper/element/bundle";
register();

export default async function Home() {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  return (
    <main className="bg-white w-100% h-screen">
      <Header title="top anime" linkTitle="lihat semua" linkHref="/populer" />
      <AnimeList api={topAnime} />
    </main>
  );
}
