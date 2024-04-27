import AnimeList from "@/app/components/AnimeList/index";
import Header from "@/app/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );

  const searchAnime = await response.json();

  return (
    <main className="bg-white w-100% h-screen mt-24">
      <Header title={`pencarian untuk ${keyword}...`} linkHref="/populer" />
      <AnimeList api={searchAnime} />
    </main>
  );
}
