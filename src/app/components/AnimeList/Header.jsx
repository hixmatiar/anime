import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <>
      <div className="mt-9 flex justify-between">
        <h1 className="font-semibold capitalize ml-5 mb-5 mt-2 text-2xl xl:text-3xl">
          {title}
        </h1>
        <Link
          href={linkHref}
          className="font-semibold capitalize  mr-5 mb-5 mt-4 text-lg xl:text-xl"
        >
          {linkTitle}
        </Link>
      </div>
    </>
  );
}
