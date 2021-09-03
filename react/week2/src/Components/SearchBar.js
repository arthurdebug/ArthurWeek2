import { useState } from "react";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const onSearchChanged = (e) => {
    const newSearch = e.currentTarget.value;
    setSearch(newSearch);
    if (newSearch === "") {
      props.onSearchChange("");
    }
  };

  return (
    <>
      <input type="text" value={search} onChange={onSearchChanged} />
      <button onClick={() => props.onSearchChange(search)}>
        Submit Search
      </button>
    </>
  );
}