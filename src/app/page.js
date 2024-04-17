import AnimeList from "@/app/components/AnimeList/index";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );

  const anime = await response.json();

  return (
    <main className="bg-white w-100% h-screen">
      <div className="mt-3">
        <h1 className="font-semibold capitalize ml-3 mb-5 mt-2 text-2xl xl:text-3xl">
          top anime
        </h1>
      </div>
      <div className="grid gap-3 mx-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                trailer={data.trailer.url}
              />
            </div>
          );
        })}
        <AnimeList />
      </div>
    </main>
  );
}
