const Search = ({ className }) => {
  return (
    <div
      className={`${className} bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm`}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" className="w-full outline-0" placeholder="Search..." />
    </div>
  );
};

export default Search;
