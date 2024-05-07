import { useContext } from "react";
import { FilterContext } from "../context/filter-context";

function useFilter() {
  return useContext(FilterContext);
}

export default useFilter;
