import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function inputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        className="border-2 w-[130px] rounded-lg h-10 sm:w-[250px] px-2"
        placeholder="cari disini.."
        ref={searchRef}
        onKeyDown={handleSearch}
      ></input>
      <button className="absolute top-2 end-3" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
}
