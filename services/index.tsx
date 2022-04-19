import React, { createContext } from "react";
import { IAgentProvider } from "./agentProvider/IAgentProvider";
import { MockAgentProvider } from "./agentProvider/MockAgentProvider";

export interface IServices {
  agentProvider: IAgentProvider;
}

export const servicesContext = createContext<IServices>({
  agentProvider: new MockAgentProvider(),
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
