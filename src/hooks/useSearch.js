import { useState } from "react";

const useSearch = (data, searchField) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { searchTerm, setSearchTerm, filteredData };
};

export default useSearch;
