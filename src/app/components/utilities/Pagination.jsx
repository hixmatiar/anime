export default function Pagination({ page, lastPage, setPage }) {
  function Next() {
    setPage((prevState) => prevState + 1);
    upWeb();
  }

  function Prev() {
    setPage((prevState) => prevState - 1);
    upWeb();
  }

  function upWeb() {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  return (
    <div className="flex justify-center items-center w-100% h-12 gap-5 my-5">
      {page <= 1 ? null : (
        <button
          className="btn btn-ghost capitalize text-lg font-semibold bg-emerald-400 text-white hover:text-black hover:bg-emerald-200"
          onClick={Prev}
        >
          prev
        </button>
      )}
      <p className="text-lg font-semibold text-emerald-400">
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          className="btn btn-ghost capitalize text-lg font-semibold bg-emerald-400 text-white hover:text-black hover:bg-emerald-200"
          onClick={Next}
        >
          next
        </button>
      )}
    </div>
  );
}
