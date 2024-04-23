"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function inputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };
  return (
    <div className="relative">
      <input
        className="border-2 w-full rounded-lg h-9 sm:w-[250px] px-2"
        placeholder="cari disini.."
        ref={searchRef}
      ></input>
      <button className="absolute top-1 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
