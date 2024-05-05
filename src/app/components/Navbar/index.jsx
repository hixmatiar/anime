"use client";

import SearchInput from "@/app/components/SearchInput";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <div className="navbar bg-emerald-300 shadow-lg">
        <div className="navbar-start">
          <details className="dropdown">
            <summary className="m-1 btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-44 bg-slate-100 border-2 sm:w-52">
              <li>
                <Link
                  href="/populer"
                  className="text-base font-semibold capitalize my-1 sm:text-lg"
                >
                  all anime
                </Link>
              </li>
            </ul>
          </details>
          <div className="flex">
            <Link href="/" className="text-base font-bold sm:text-xl">
              My Anime List
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
