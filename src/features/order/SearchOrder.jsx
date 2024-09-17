import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order by item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-3 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 text-sm bg-yellow-100 placeholder:text-stone-400 sm:w-46 sm:focus:w-72 transition-all duration-300"
      />
    </form>
  );
}

export default SearchOrder;
