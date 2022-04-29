import { IAgentProvider, ProvidedAgent } from "./IAgentProvider";
import create from "zustand";

const BASE_URL = "http://localhost:3000/agents";

export const agentProvider = create<IAgentProvider>((set) => ({
  agents: [],
  toggleActivation: async (activationUrl: string) => {
    const response = await fetch(activationUrl, { method: "PUT" });
    const updatedAgent = await response.json();
    return updatedAgent;
  },
  getAgents: async () => {
    const response = await fetch(BASE_URL);
    const agents = await response.json();
    set((state) => ({ agents }));
  },
  getAgentById: async (detailsUrl: string) => {
    const response = await fetch(detailsUrl);
    const agent = await response.json();
    return agent;
  },
  createAgent: async (agent: ProvidedAgent) => {
    const response = await fetch(BASE_URL, { method: "POST", body: JSON.stringify(agent) });
    const createdAgent = await response.json();
    return createdAgent;
  },
  updateAgent: async (detailsUrl:string, agent: ProvidedAgent) => {
    const response = await fetch(detailsUrl, { method: "PUT", body: JSON.stringify(agent) });
    const updatedAgent = await response.json();
    return updatedAgent;
  },
}));
