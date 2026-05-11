const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="serach todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
