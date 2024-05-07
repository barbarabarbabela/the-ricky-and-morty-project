import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <FilterContext.Provider value={{ selectedFilter, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
};
