import React, { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  return (
    <DataContext.Provider
      value={{ provinces, setProvinces, cities, setCities }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
