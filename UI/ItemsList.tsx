import { Wrap } from "@chakra-ui/react";
import React from "react";

const ItemsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default ItemsList;
