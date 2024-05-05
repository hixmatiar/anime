import { getAnimeResponse } from "@/app/libs/api-libs";

export default async function Anime({ params: { id } }) {
  const detailAnime = await getAnimeResponse(`anime/${id}`);
  console.log(detailAnime);
  return (
    <>
      <div>hai ini detail anime nya</div>
    </>
  );
}
