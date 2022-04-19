import React, { createContext } from "react";
import { AgentProvider } from "./agentProvider/AgentProvider";
import { IAgentProvider } from "./agentProvider/IAgentProvider";

export interface IServices {
  agentProvider: IAgentProvider;
}

const servicesContext = createContext<IServices | null>(null);

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
