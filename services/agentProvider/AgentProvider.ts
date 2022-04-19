import { IAgentProvider, ProvidedAgent } from "./IAgentProvider";

export class AgentProvider implements IAgentProvider {
  getAgentById(id: string): Promise<ProvidedAgent | null> {
    throw new Error("Method not implemented.");
  }
  getAgents(): Promise<ProvidedAgent[]> {
    return fetch("http://localhost:3000/agents").then((response) =>
      response.json()
    );
  }
  createAgent(agent: ProvidedAgent): void {
    throw new Error("Method not implemented.");
  }
  updateAgent(agent: ProvidedAgent): void {
    throw new Error("Method not implemented.");
  }
}
