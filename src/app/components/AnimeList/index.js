import Image from "next/image";

export default function AnimeList({ title, images, trailer }) {
  return (
    <a href={trailer} className="cursor-pointer">
      <div className="bg-sky-400 h-full card">
        <div className="card-title">
          <Image
            src={images}
            alt="..."
            width={350}
            height={350}
            className="rounded-xl w-full min-h-[350px] xl:max-h-[500px] lg:max-h-[4500px] md:max-h-[4000px]"
          />
        </div>
        <div className="w-full px-2 h-14 flex justify-center items-center">
          <h3 className="text-center text-sm font-semibold xl:text-lg lg:text-base md:text-sm">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
}
