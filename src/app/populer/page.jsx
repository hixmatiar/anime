"use client";
import React, { useEffect, useState } from "react";
import HeaderMenu from "@/app/components/utilities/HeaderMenu";
import Pagination from "@/app/components/utilities/Pagination";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "../libs/api-libs";

export default function pagePopuler() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    // );
    // const data = await response.json();
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <main className="w-100% h-screen">
      <HeaderMenu title={page} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </main>
  );
}
