import React, { createContext } from "react";
import { UseBoundStore, StoreApi } from "zustand";
import { IAgentProvider } from "./agentProvider/IAgentProvider";
import { mockAgentProvider } from "./agentProvider/MockAgentProvider";

export interface IServices {
  useAgentProvider: UseBoundStore<StoreApi<IAgentProvider>>;
}

export const servicesContext = createContext<IServices>({
  useAgentProvider: mockAgentProvider,
});

const Services: React.FC<{
  createProvidedServices: () => IServices;
  children: React.ReactNode;
}> = ({ createProvidedServices, children }) => {
  return (
    <servicesContext.Provider value={createProvidedServices()}>
      {children}
    </servicesContext.Provider>
  );
};

export default Services;
