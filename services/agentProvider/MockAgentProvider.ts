import create from "zustand";
import { IAgentProvider, ProvidedAgent } from "./IAgentProvider";

export const mockAgentProvider = create<IAgentProvider>((set) => ({
  agents: [],
  toggleActivation: async (activationEndpoint: string) => {
    throw new Error("Method not implemented.");
  },
  getAgents: async () => {
    throw new Error("Method not implemented.");
  },
  getAgentById: async (id: string) => {
    throw new Error("Method not implemented.");
  },
  createAgent: async (agent: ProvidedAgent) => {
    throw new Error("Method not implemented.");
  },
  updateAgent: async (agent: ProvidedAgent) => {
    throw new Error("Method not implemented.");
  },
}));
