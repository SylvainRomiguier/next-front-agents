import React from "react";

const ItemsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>;
};

export default ItemsList;
