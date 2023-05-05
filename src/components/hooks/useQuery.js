import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();

  console.log("search", search);

  return React.useMemo(() => new URLSearchParams(search).entries(), [search]);
};

export default useQuery;
