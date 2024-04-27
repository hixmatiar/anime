import AnimeList from "@/app/components/AnimeList/index";
import Header from "./components/AnimeList/Header";

export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );

  const topAnime = await response.json();

  return (
    <main className="bg-white w-100% h-screen mt-24">
      <Header title="top anime" linkTitle="lihat semua" linkHref="/populer" />
      <AnimeList api={topAnime} />
    </main>
  );
}
