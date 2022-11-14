import { createContext, useState, useContext } from "react";

const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  const [detail, setDetail] = useState([]);

  return (
    <DetailContext.Provider value={{ detail, setDetail }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail = () => useContext(DetailContext);
