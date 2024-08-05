"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Search = ({ className }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const newPathName = pathName === "/" ? "/category" : pathName;

  const onClickHandler = () => {
    search
      ? router.push(`${newPathName}?search=${search}`)
      : router.push(`${newPathName}`);
  };

  return (
    <div
      className={`${className} bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm`}
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        className="w-full outline-0"
        placeholder="Search with name..."
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            onClickHandler();
          }
        }}
      />
    </div>
  );
};

export default Search;
