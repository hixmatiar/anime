import Image from "next/image";

export default function AnimeList({ api }) {
  return (
    <div className="grid gap-3 mx-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {api.data.map((anime) => {
        return (
          <div className="bg-sky-400 h-full card shadow-xl">
            <div className="card-title">
              <Image
                src={anime.images.webp.image_url}
                alt="..."
                width={350}
                height={350}
                className="rounded-xl w-full min-h-[300px] xl:max-h-[500px] lg:max-h-[4500px] md:max-h-[4000px]"
              />
            </div>
            <div className="w-full px-2 h-14 flex justify-center items-center">
              <h3 className="text-center text-sm font-semibold xl:text-lg lg:text-base md:text-sm">
                {anime.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
